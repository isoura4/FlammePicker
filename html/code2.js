gdjs.AdminCommandeCode = {};
gdjs.AdminCommandeCode.localVariables = [];
gdjs.AdminCommandeCode.GDheaderObjects1= [];
gdjs.AdminCommandeCode.GDheaderObjects2= [];
gdjs.AdminCommandeCode.GDheaderObjects3= [];
gdjs.AdminCommandeCode.GDNbCommandeObjects1= [];
gdjs.AdminCommandeCode.GDNbCommandeObjects2= [];
gdjs.AdminCommandeCode.GDNbCommandeObjects3= [];


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


};gdjs.AdminCommandeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.firestore.updateField("update", "commande", "nbr", "1", gdjs.VariablesContainer.badVariable);
}}

}


};gdjs.AdminCommandeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NbCommande"), gdjs.AdminCommandeCode.GDNbCommandeObjects1);
{for(var i = 0, len = gdjs.AdminCommandeCode.GDNbCommandeObjects1.length ;i < len;++i) {
    gdjs.AdminCommandeCode.GDNbCommandeObjects1[i].getBehavior("Text").setText("Commande total :" + (gdjs.RuntimeObject.getVariableString(gdjs.AdminCommandeCode.GDNbCommandeObjects1[i].getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.AdminCommandeCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.AdminCommandeCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.firestore.getDocument("update", "commande", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("0"))) + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("1"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "testChrono") >= 15;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "testChrono");
}
{ //Subevents
gdjs.AdminCommandeCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.AdminCommandeCode.eventsList5 = function(runtimeScene) {

{


gdjs.AdminCommandeCode.eventsList0(runtimeScene);
}


{


gdjs.AdminCommandeCode.eventsList2(runtimeScene);
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
gdjs.AdminCommandeCode.GDNbCommandeObjects1.length = 0;
gdjs.AdminCommandeCode.GDNbCommandeObjects2.length = 0;
gdjs.AdminCommandeCode.GDNbCommandeObjects3.length = 0;

gdjs.AdminCommandeCode.eventsList5(runtimeScene);

return;

}

gdjs['AdminCommandeCode'] = gdjs.AdminCommandeCode;
