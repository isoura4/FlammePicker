gdjs.AdminLoginCode = {};
gdjs.AdminLoginCode.localVariables = [];
gdjs.AdminLoginCode.GDBackgroundLoginObjects1= [];
gdjs.AdminLoginCode.GDBackgroundLoginObjects2= [];
gdjs.AdminLoginCode.GDBackgroundLoginObjects3= [];
gdjs.AdminLoginCode.GDlogin_9595backObjects1= [];
gdjs.AdminLoginCode.GDlogin_9595backObjects2= [];
gdjs.AdminLoginCode.GDlogin_9595backObjects3= [];
gdjs.AdminLoginCode.GDTextObjects1= [];
gdjs.AdminLoginCode.GDTextObjects2= [];
gdjs.AdminLoginCode.GDTextObjects3= [];
gdjs.AdminLoginCode.GDText2Objects1= [];
gdjs.AdminLoginCode.GDText2Objects2= [];
gdjs.AdminLoginCode.GDText2Objects3= [];
gdjs.AdminLoginCode.GDText3Objects1= [];
gdjs.AdminLoginCode.GDText3Objects2= [];
gdjs.AdminLoginCode.GDText3Objects3= [];
gdjs.AdminLoginCode.GDtextFieldObjects1= [];
gdjs.AdminLoginCode.GDtextFieldObjects2= [];
gdjs.AdminLoginCode.GDtextFieldObjects3= [];
gdjs.AdminLoginCode.GDloginbtnObjects1= [];
gdjs.AdminLoginCode.GDloginbtnObjects2= [];
gdjs.AdminLoginCode.GDloginbtnObjects3= [];
gdjs.AdminLoginCode.GDbtnRetourObjects1= [];
gdjs.AdminLoginCode.GDbtnRetourObjects2= [];
gdjs.AdminLoginCode.GDbtnRetourObjects3= [];
gdjs.AdminLoginCode.GDLoginObjects1= [];
gdjs.AdminLoginCode.GDLoginObjects2= [];
gdjs.AdminLoginCode.GDLoginObjects3= [];
gdjs.AdminLoginCode.GDPasswordObjects1= [];
gdjs.AdminLoginCode.GDPasswordObjects2= [];
gdjs.AdminLoginCode.GDPasswordObjects3= [];


gdjs.AdminLoginCode.asyncCallback10271500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AdminLoginCode.localVariables);
gdjs.AdminLoginCode.localVariables.length = 0;
}
gdjs.AdminLoginCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AdminLoginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AdminLoginCode.asyncCallback10271500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AdminLoginCode.asyncCallback10272060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AdminLoginCode.localVariables);
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}gdjs.AdminLoginCode.localVariables.length = 0;
}
gdjs.AdminLoginCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AdminLoginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AdminLoginCode.asyncCallback10272060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AdminLoginCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.AdminLoginCode.GDLoginObjects2);
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.AdminLoginCode.GDPasswordObjects2);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.AdminLoginCode.GDLoginObjects2.length === 0 ) ? "" :gdjs.AdminLoginCode.GDLoginObjects2[0].getText()), (( gdjs.AdminLoginCode.GDPasswordObjects2.length === 0 ) ? "" :gdjs.AdminLoginCode.GDPasswordObjects2[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.AdminLoginCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.p2p.overrideId("adminflammepicker");
}
{ //Subevents
gdjs.AdminLoginCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.AdminLoginCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AdminCommande", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.remoteConfig.setAutoUpdateInterval(500);
}{firebase.performance();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loginbtn"), gdjs.AdminLoginCode.GDloginbtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AdminLoginCode.GDloginbtnObjects1.length;i<l;++i) {
    if ( gdjs.AdminLoginCode.GDloginbtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AdminLoginCode.GDloginbtnObjects1[k] = gdjs.AdminLoginCode.GDloginbtnObjects1[i];
        ++k;
    }
}
gdjs.AdminLoginCode.GDloginbtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.AdminLoginCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.AdminLoginCode.asyncCallback10274060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AdminLoginCode.localVariables);
gdjs.AdminLoginCode.localVariables.length = 0;
}
gdjs.AdminLoginCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AdminLoginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AdminLoginCode.asyncCallback10274060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AdminLoginCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btnRetour"), gdjs.AdminLoginCode.GDbtnRetourObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AdminLoginCode.GDbtnRetourObjects2.length;i<l;++i) {
    if ( gdjs.AdminLoginCode.GDbtnRetourObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AdminLoginCode.GDbtnRetourObjects2[k] = gdjs.AdminLoginCode.GDbtnRetourObjects2[i];
        ++k;
    }
}
gdjs.AdminLoginCode.GDbtnRetourObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartPage", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loginbtn"), gdjs.AdminLoginCode.GDloginbtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AdminLoginCode.GDloginbtnObjects1.length;i<l;++i) {
    if ( gdjs.AdminLoginCode.GDloginbtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AdminLoginCode.GDloginbtnObjects1[k] = gdjs.AdminLoginCode.GDloginbtnObjects1[i];
        ++k;
    }
}
gdjs.AdminLoginCode.GDloginbtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.AdminLoginCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.AdminLoginCode.eventsList6 = function(runtimeScene) {

{


gdjs.AdminLoginCode.eventsList3(runtimeScene);
}


{


gdjs.AdminLoginCode.eventsList5(runtimeScene);
}


};

gdjs.AdminLoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AdminLoginCode.GDBackgroundLoginObjects1.length = 0;
gdjs.AdminLoginCode.GDBackgroundLoginObjects2.length = 0;
gdjs.AdminLoginCode.GDBackgroundLoginObjects3.length = 0;
gdjs.AdminLoginCode.GDlogin_9595backObjects1.length = 0;
gdjs.AdminLoginCode.GDlogin_9595backObjects2.length = 0;
gdjs.AdminLoginCode.GDlogin_9595backObjects3.length = 0;
gdjs.AdminLoginCode.GDTextObjects1.length = 0;
gdjs.AdminLoginCode.GDTextObjects2.length = 0;
gdjs.AdminLoginCode.GDTextObjects3.length = 0;
gdjs.AdminLoginCode.GDText2Objects1.length = 0;
gdjs.AdminLoginCode.GDText2Objects2.length = 0;
gdjs.AdminLoginCode.GDText2Objects3.length = 0;
gdjs.AdminLoginCode.GDText3Objects1.length = 0;
gdjs.AdminLoginCode.GDText3Objects2.length = 0;
gdjs.AdminLoginCode.GDText3Objects3.length = 0;
gdjs.AdminLoginCode.GDtextFieldObjects1.length = 0;
gdjs.AdminLoginCode.GDtextFieldObjects2.length = 0;
gdjs.AdminLoginCode.GDtextFieldObjects3.length = 0;
gdjs.AdminLoginCode.GDloginbtnObjects1.length = 0;
gdjs.AdminLoginCode.GDloginbtnObjects2.length = 0;
gdjs.AdminLoginCode.GDloginbtnObjects3.length = 0;
gdjs.AdminLoginCode.GDbtnRetourObjects1.length = 0;
gdjs.AdminLoginCode.GDbtnRetourObjects2.length = 0;
gdjs.AdminLoginCode.GDbtnRetourObjects3.length = 0;
gdjs.AdminLoginCode.GDLoginObjects1.length = 0;
gdjs.AdminLoginCode.GDLoginObjects2.length = 0;
gdjs.AdminLoginCode.GDLoginObjects3.length = 0;
gdjs.AdminLoginCode.GDPasswordObjects1.length = 0;
gdjs.AdminLoginCode.GDPasswordObjects2.length = 0;
gdjs.AdminLoginCode.GDPasswordObjects3.length = 0;

gdjs.AdminLoginCode.eventsList6(runtimeScene);

return;

}

gdjs['AdminLoginCode'] = gdjs.AdminLoginCode;
