# Implémenter REDUX côté FRONT-END pour les todos

## Créer todosReducer.js

    import { FETCH_TODOS } from "../actions/types";

    //Pour éviter les confusions, on utilisera toujours items et item

    const initialState = {
        items: []
        //Et éventuellement :
        //item:{}
    };

    export default function (state = initialState, action) {
        switch (action.type) {
            case FETCH_TODOS:
            return {
                ...state,
                items: action.payload
            };

            default:
            return state;
        }
    }

## Dans reducers/index.js

    Importer le todosReducer
    Ajouter todos:todosReducer dans combineReducers

## Dans actions/types.js

    export const FETCH_TODOS = "FETCH_TODOS";

## Créer l'action actions/todosActions.js

    import { FETCH_TODOS } from "./types";

    export const fetchTodos = () => dispatch => {
    fetch("http://localhost:1337/todos")
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH_TODOS,
                payload: data
            })
        );
    };

Et enfin dans le Component Todos

## Importer connect

    import { connect } from "react-redux";

## Importer l'action :

    import { fetchTodos } from "../../actions/todosActions";

## Créer mapStateToProps (en dehors de la classe)

    const mapStateToProps = state => ({
        //voir clé dans rootReducer
        todos: state.todos.items
    });

## Et enfin refactorer l'export

    export default connect(mapStateToProps, { fetchTodos })(Todos);

## On utilisera maintenant props dans le Component :

    componentWillMount() {
        this.props.fetchTodos();
    }
    render(){
        const todos = this.props.todos;
    }

# On devrait utiliser les PropTypes

...Mais pourquoi ?

Dans le composant :

    import PropTypes from 'prop-types';

Après la classe :

    Todos.propTypes = {
        fetchTodos:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }

# Erreur b is undefined (FIREFOX)

    "You have to install redux dev tool chrome extension and react chrome extension."

# FAIRE PASSER DES DONNEES

Depuis le Component :

    onSubmit = e => {
        e.preventDefault();

        /*
            CREER UN OBJET POSTDATA
            Qui contient les données du state
            Et sera transmis à l'ACTION
        */

        const postData = {
            identifier: this.state.identifier,
            password: this.state.password
        };

        this.props.login(postData);
    };

Dans l'action :

    export const login = postData => dispatch => {
        //NOTER ICI postData en paramètre
    };

postData permet d'avoir accès aux données dans l'action :

    //Par exemple d'envoyer via FETCH

    body: JSON.stringify({
        identifier: postData.identifier,
        password: postData.password
    })

# Connecter plusieurs actions au composant :

    import { login, logout } from "../../actions/loginActions";
    export default connect(mapStateToProps, { login, logout })(Login);

# Faire passer une propriété d'un autre composant :

    const mapStateToProps = state => ({
        todos: state.todos.items,
        userIsLogged: state.logins.logged,
        jwt:state.logins.jwt
    });

On y accède comme d'habitude :

    let userIsLogged = this.props.userIsLogged;
    let jwt = this.props.jwt;
