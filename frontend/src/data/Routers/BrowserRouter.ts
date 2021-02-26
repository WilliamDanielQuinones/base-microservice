import {createBrowserHistory, Location} from 'history';
//import HubSpotHandler from "../App/HubSpotHandler";

/*
 * The browser router class creates an instance of BrowserHistory so we can track the browser's history in a single-page
 * application. Only use this if you are using React as a single-page app. This allows the user to use the native back
 * button or forward buttons as if they were on a regular application. This is closely tied to React Router v4, so check
 * documentation at https://github.com/ReactTraining/react-router for more details. You'll see this instantiated in
 * App.tsx in RR4's <Router/> component.
 *
 */

class BrowserRouterClass {
    history:any;

    constructor(){
        this.history = createBrowserHistory();

        // Register HubSpot page tracking for each route change
        //this.history.listen((location:Location) => HubSpotHandler.onRouteChange(location.pathname))
    }

    push(url:string){
        this.history.push(url);
        window.scroll(0, 0);
        //(window as any).Appcues.page();
    }

}

const BrowserRouter = new BrowserRouterClass()
export default BrowserRouter

/*
 * Use this class to statically type the exact browser routes you'd like to handle. If your route uses a param, make
 * make sure to use the "exampleByIdParam" route. It acts as a catch-all, so it will route to your component whether
 * or not you have the ID param in the url.
 */

export class BrowserRoutes {

    static BASE = ''

    /* Data Type Route Chunks */
    static DEBUGGER = 'debugger'
    static HOME = 'home'
    static MANAGE_USERS = 'manage_users'
    static SEND_INVITATIONS = 'send_invitations'

    static get debugger(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.DEBUGGER}`
    }
    static get home(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.HOME}`
    }


    /* Data Type Static Routes */
    static getAdminDashboardById(id:string){
        return `${BrowserRoutes.BASE}/${id}`
    }
    static get adminDashboardManageUsers(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.MANAGE_USERS}`
    }
    static get adminDashboardSendInvitations(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.SEND_INVITATIONS}`
    }
}
