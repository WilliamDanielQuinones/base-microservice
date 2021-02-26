import {AppRoutesObject} from "./AppRoutes";

export interface AppRoute extends AppRouteHeader, AppRouteRender {}

export interface AppRouteRender {
    render:any,
}
export interface AppRouteHeader {
    icon:any,
    path:string,
    key?:string,
    hide?:boolean,
}

export interface TAppRoutesObject {
    [key:string]:AppRoute,
}

function getAppRoutesRenders(routesObject:TAppRoutesObject):AppRouteRender[]{
    return Object.keys(routesObject).map(key => routesObject[key].render)
}

function getAppRoutesHeaders(routesObject:TAppRoutesObject):AppRouteHeader[]{
    let ret:AppRouteHeader[] = [];
    Object.keys(routesObject).forEach(key => {
        const {path, icon, hide} = routesObject[key];
        if (!hide) ret.push({key, path, icon} as AppRouteHeader);
    });
    return ret;
}

export const AppRoutesRenders = [
    getAppRoutesRenders(AppRoutesObject),
];

export const AppHeaderItems:AppRouteHeader[] = [
    ...getAppRoutesHeaders({
        ...AppRoutesObject,
    })
];

export const AppRoutesPathReference:TAppRoutesObject = {
    ...AppRoutesObject,
};



