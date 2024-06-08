gdjs.AdminCommandeCode = {};
gdjs.AdminCommandeCode.GDheaderObjects1= [];
gdjs.AdminCommandeCode.GDheaderObjects2= [];
gdjs.AdminCommandeCode.GDheaderObjects3= [];


gdjs.AdminCommandeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{firebase.analytics();
}{firebase.performance();
}{firebase.firestore().enableNetwork();
}}

}


};gdjs.AdminCommandeCode.asyncCallback10029436 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.AdminCommandeCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AdminCommandeCode.asyncCallback10029436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AdminCommandeCode.asyncCallback10029012 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.firebaseTools.firestore.getField("update", "commande", "true", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.AdminCommandeCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.AdminCommandeCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AdminCommandeCode.asyncCallback10029012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AdminCommandeCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{firebase.firestore().enablePersistence();
}
{ //Subevents
gdjs.AdminCommandeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.AdminCommandeCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "testChrono");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "testChrono") >= 30;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "testChrono");
}}

}


};gdjs.AdminCommandeCode.eventsList5 = function(runtimeScene) {

{


gdjs.AdminCommandeCode.eventsList0(runtimeScene);
}


{


gdjs.AdminCommandeCode.eventsList3(runtimeScene);
}


{


gdjs.AdminCommandeCode.eventsList4(runtimeScene);
}


};

gdjs.AdminCommandeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AdminCommandeCode.GDheaderObjects1.length = 0;
gdjs.AdminCommandeCode.GDheaderObjects2.length = 0;
gdjs.AdminCommandeCode.GDheaderObjects3.length = 0;

gdjs.AdminCommandeCode.eventsList5(runtimeScene);

return;

}

gdjs['AdminCommandeCode'] = gdjs.AdminCommandeCode;
