import Select from "react-select/lib/Async";
import { Component, Fragment } from "@wordpress/element";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { createGlobalStyle } from "styled-components";
import { __ } from "@wordpress/i18n";
import { SvgIcon } from "yoast-components";
import { sendRequest } from "@yoast/helpers";

/**
 * Styles to overwrite react-select styles.
 *
 * @type React.Component
 */
const Styles = createGlobalStyle`
	.yoast-person-selector-container {
		max-width: 400px;
		min-width: 250px;
		margin: 7px 0;

		.yoast-person-selector {
			&__control {
				border-radius: 0;
				box-shadow: inset 0 1px 2px rgba(0,0,0,.07);
				min-height: 28px;
			}
			
			&__input input {
				box-shadow: none;
				margin: 0;
			}
			
			&__menu {
				margin: 0;
				border-radius: 0;
			}
			
			&__menu-list {
				padding: 0;
			}
			
			&__option--is-selected {
				background-color: #0085ba;
			}
			
			&__indicators {
				padding: 0 10px;
			}
		}
	}
`;

const HEADERS = {
	"X-WP-NONCE": wpApiSettings.nonce,
};

/**
 * Component to replace the react-select dropdown icon.
 *
 * @returns {React.Element} The rendered element.
 */
const Icon = () => (
	<SvgIcon
		icon="arrow-down"
		color="#72777c"
		size="10px"
	/>
);

/**
 * Allows a user to be selected within a WordPress context.
 */
class WordPressUserSelector extends Component {
	/**
	 * The WordPressUserSelector constructor.
	 *
	 * @param {Object} props The component props.
	 */
	constructor( props ) {
		super( props );

		this.state = {
			selectedOption: null,
			loading: !! this.props.value,
		};

		this.fetchUsers = debounce( this.fetchUsers, 500 ).bind( this );
		this.fetchUser = this.fetchUser.bind( this );
		this.mapUserToSelectOption = this.mapUserToSelectOption.bind( this );
		this.onChange = this.onChange.bind( this );
	}

	/**
	 * Renders the WordPressUserSelector component.
	 *
	 * @returns {React.Element} The rendered component.
	 */
	render() {
		return (
			<Fragment>
				<Styles />
				<Select
					placeholder={ __( "Select a user...", "wordpress-seo" ) }
					isDisabled={ this.state.loading }
					inputId={ this.props.name }
					className={ "yoast-person-selector-container" }
					classNamePrefix={ "yoast-person-selector" }
					value={ this.state.selectedOption }
					onChange={ this.onChange }
					defaultOptions={ true }
					loadOptions={ this.fetchUsers }
					components={ {
						IndicatorSeparator: null,
						DropdownIndicator: Icon,
					} }
				/>
			</Fragment>
		);
	}

	/**
	 * If a user id is defined fetch the currently selected user.
	 *
	 * @returns {void}
	 */
	componentDidMount() {
		if ( this.props.value ) {
			this.fetchUser( this.props.value );
		}
	}

	/**
	 * Creates a query string from a params object.
	 *
	 * @param {Object} params Params for in the query string.
	 *
	 * @returns {string} URI encoded query string.
	 */
	static createQueryString( params ) {
		return Object.keys( params )
			.filter( key => !! params[ key ] )
			.map( key => `${ encodeURIComponent( key ) }=${ encodeURIComponent( params[ key ] ) }` )
			.join( "&" );
	}

	/**
	 * Handles the onChange event.
	 *
	 * @param {{ value: number, label: string }} option The selected option.
	 *
	 * @returns {void}
	 */
	onChange( option ) {
		this.setState( {
			selectedOption: option,
			loading: false,
		}, () => {
			this.props.onChange( option.value, option.label );
		} );
	}

	/**
	 * Maps a WordPress user API result to a react-select option.
	 *
	 * @param {Object} user The WordPress user object.
	 *
	 * @returns {Object} The mapped user for react-select.
	 */
	mapUserToSelectOption( user ) {
		return {
			value: user.id,
			label: user.name,
		};
	}

	/**
	 * Fetches a single WordPress user.
	 *
	 * Is only called from componentDidMount and assumes the component is already in a loading state.
	 *
	 * @param {string|number} id The user id.
	 *
	 * @returns {void}
	 */
	async fetchUser( id ) {
		const user = await sendRequest( `/wp-json/wp/v2/users/${ id }`, { method: "GET", headers: HEADERS } );

		if ( ! user ) {
			this.setState( { loading: false } );

			return;
		}

		this.onChange( this.mapUserToSelectOption( user ) );
	}

	/**
	 * Searches for WordPress users.
	 *
	 * @param {string}   input    The search term.
	 * @param {function} callback Callback to be called with users.
	 *
	 * @returns {void}
	 */
	fetchUsers( input, callback ) {
		const queryParameters = WordPressUserSelector.createQueryString( {
			/* eslint-disable-next-line camelcase */
			per_page: 10,
			search: input,
		} );

		sendRequest( `/wp-json/wp/v2/users?${ queryParameters }`, { method: "GET", headers: HEADERS } ).then( users => {
			const mappedUsers = users.map( this.mapUserToSelectOption );

			callback( mappedUsers );
		} );
	}
}

WordPressUserSelector.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	properties: PropTypes.shape( {
		user: PropTypes.number,
	} ).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default WordPressUserSelector;
