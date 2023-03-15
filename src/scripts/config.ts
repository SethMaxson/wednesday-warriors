export namespace Config {
    export const IsDebug = true;
    export const IsDM = true;
    //#region URLs
    export const BaseUrl = IsDebug? "http://127.0.0.1:5500/dnd/" : "https://sethmaxson.github.io/dnd/";
    export const BaseImageUrl = BaseUrl + "img/";
    export const WikiUrl = BaseUrl + "tiddlywiki/" + (IsDM? 'dm.html' : 'public.html');
    //#endregion URLs
}