gdjs.StartPageCode = {};
gdjs.StartPageCode.GDiconeObjects1= [];
gdjs.StartPageCode.GDiconeObjects2= [];
gdjs.StartPageCode.GDiconeObjects3= [];
gdjs.StartPageCode.GDBtnAdminObjects1= [];
gdjs.StartPageCode.GDBtnAdminObjects2= [];
gdjs.StartPageCode.GDBtnAdminObjects3= [];
gdjs.StartPageCode.GDBtnComanderObjects1= [];
gdjs.StartPageCode.GDBtnComanderObjects2= [];
gdjs.StartPageCode.GDBtnComanderObjects3= [];
gdjs.StartPageCode.GDTitreObjects1= [];
gdjs.StartPageCode.GDTitreObjects2= [];
gdjs.StartPageCode.GDTitreObjects3= [];
gdjs.StartPageCode.GDText1Objects1= [];
gdjs.StartPageCode.GDText1Objects2= [];
gdjs.StartPageCode.GDText1Objects3= [];
gdjs.StartPageCode.GDText2Objects1= [];
gdjs.StartPageCode.GDText2Objects2= [];
gdjs.StartPageCode.GDText2Objects3= [];
gdjs.StartPageCode.GDtextFieldObjects1= [];
gdjs.StartPageCode.GDtextFieldObjects2= [];
gdjs.StartPageCode.GDtextFieldObjects3= [];
gdjs.StartPageCode.GDidentifiantObjects1= [];
gdjs.StartPageCode.GDidentifiantObjects2= [];
gdjs.StartPageCode.GDidentifiantObjects3= [];


gdjs.StartPageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.remoteConfig.setAutoUpdateInterval(500);
}{firebase.analytics();
}{firebase.performance();
}}

}


};gdjs.StartPageCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UserPizza", false);
}}

}


};gdjs.StartPageCode.asyncCallback9880780 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("identifiant"), gdjs.StartPageCode.GDidentifiantObjects2);

{gdjs.evtTools.firebaseTools.auth.userManagement.setDisplayName((( gdjs.StartPageCode.GDidentifiantObjects2.length === 0 ) ? "" :gdjs.StartPageCode.GDidentifiantObjects2[0].getText()));
}
{ //Subevents
gdjs.StartPageCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartPageCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StartPageCode.GDidentifiantObjects1) asyncObjectsList.addObject("identifiant", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.StartPageCode.asyncCallback9880780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartPageCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.StartPageCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.StartPageCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("identifiant"), gdjs.StartPageCode.GDidentifiantObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartPageCode.GDidentifiantObjects2.length;i<l;++i) {
    if ( gdjs.StartPageCode.GDidentifiantObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.StartPageCode.GDidentifiantObjects2[k] = gdjs.StartPageCode.GDidentifiantObjects2[i];
        ++k;
    }
}
gdjs.StartPageCode.GDidentifiantObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, "Veuillez entrer un nom ou prénom", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("identifiant"), gdjs.StartPageCode.GDidentifiantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartPageCode.GDidentifiantObjects1.length;i<l;++i) {
    if ( gdjs.StartPageCode.GDidentifiantObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.StartPageCode.GDidentifiantObjects1[k] = gdjs.StartPageCode.GDidentifiantObjects1[i];
        ++k;
    }
}
gdjs.StartPageCode.GDidentifiantObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartPageCode.GDidentifiantObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.StartPageCode.GDidentifiantObjects1.length === 0 ) ? "" :gdjs.StartPageCode.GDidentifiantObjects1[0].getText()));
}
{ //Subevents
gdjs.StartPageCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartPageCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BtnAdmin"), gdjs.StartPageCode.GDBtnAdminObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartPageCode.GDBtnAdminObjects2.length;i<l;++i) {
    if ( gdjs.StartPageCode.GDBtnAdminObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartPageCode.GDBtnAdminObjects2[k] = gdjs.StartPageCode.GDBtnAdminObjects2[i];
        ++k;
    }
}
gdjs.StartPageCode.GDBtnAdminObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AdminLogin", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnComander"), gdjs.StartPageCode.GDBtnComanderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartPageCode.GDBtnComanderObjects1.length;i<l;++i) {
    if ( gdjs.StartPageCode.GDBtnComanderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartPageCode.GDBtnComanderObjects1[k] = gdjs.StartPageCode.GDBtnComanderObjects1[i];
        ++k;
    }
}
gdjs.StartPageCode.GDBtnComanderObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartPageCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.StartPageCode.eventsList6 = function(runtimeScene) {

{


gdjs.StartPageCode.eventsList0(runtimeScene);
}


{


gdjs.StartPageCode.eventsList5(runtimeScene);
}


};

gdjs.StartPageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartPageCode.GDiconeObjects1.length = 0;
gdjs.StartPageCode.GDiconeObjects2.length = 0;
gdjs.StartPageCode.GDiconeObjects3.length = 0;
gdjs.StartPageCode.GDBtnAdminObjects1.length = 0;
gdjs.StartPageCode.GDBtnAdminObjects2.length = 0;
gdjs.StartPageCode.GDBtnAdminObjects3.length = 0;
gdjs.StartPageCode.GDBtnComanderObjects1.length = 0;
gdjs.StartPageCode.GDBtnComanderObjects2.length = 0;
gdjs.StartPageCode.GDBtnComanderObjects3.length = 0;
gdjs.StartPageCode.GDTitreObjects1.length = 0;
gdjs.StartPageCode.GDTitreObjects2.length = 0;
gdjs.StartPageCode.GDTitreObjects3.length = 0;
gdjs.StartPageCode.GDText1Objects1.length = 0;
gdjs.StartPageCode.GDText1Objects2.length = 0;
gdjs.StartPageCode.GDText1Objects3.length = 0;
gdjs.StartPageCode.GDText2Objects1.length = 0;
gdjs.StartPageCode.GDText2Objects2.length = 0;
gdjs.StartPageCode.GDText2Objects3.length = 0;
gdjs.StartPageCode.GDtextFieldObjects1.length = 0;
gdjs.StartPageCode.GDtextFieldObjects2.length = 0;
gdjs.StartPageCode.GDtextFieldObjects3.length = 0;
gdjs.StartPageCode.GDidentifiantObjects1.length = 0;
gdjs.StartPageCode.GDidentifiantObjects2.length = 0;
gdjs.StartPageCode.GDidentifiantObjects3.length = 0;

gdjs.StartPageCode.eventsList6(runtimeScene);

return;

}

gdjs['StartPageCode'] = gdjs.StartPageCode;
