gdjs.CreditCode = {};
gdjs.CreditCode.localVariables = [];
gdjs.CreditCode.GDfooterObjects1= [];
gdjs.CreditCode.GDfooterObjects2= [];
gdjs.CreditCode.GDhomeObjects1= [];
gdjs.CreditCode.GDhomeObjects2= [];
gdjs.CreditCode.GDNewSpriteObjects1= [];
gdjs.CreditCode.GDNewSpriteObjects2= [];
gdjs.CreditCode.GDNewPanelSpriteObjects1= [];
gdjs.CreditCode.GDNewPanelSpriteObjects2= [];
gdjs.CreditCode.GDNewTextObjects1= [];
gdjs.CreditCode.GDNewTextObjects2= [];


gdjs.CreditCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.CreditCode.GDhomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditCode.GDhomeObjects1.length;i<l;++i) {
    if ( gdjs.CreditCode.GDhomeObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreditCode.GDhomeObjects1[k] = gdjs.CreditCode.GDhomeObjects1[i];
        ++k;
    }
}
gdjs.CreditCode.GDhomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UserFlamme", false);
}}

}


};gdjs.CreditCode.eventsList1 = function(runtimeScene) {

{


gdjs.CreditCode.eventsList0(runtimeScene);
}


};

gdjs.CreditCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditCode.GDfooterObjects1.length = 0;
gdjs.CreditCode.GDfooterObjects2.length = 0;
gdjs.CreditCode.GDhomeObjects1.length = 0;
gdjs.CreditCode.GDhomeObjects2.length = 0;
gdjs.CreditCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.CreditCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.CreditCode.GDNewTextObjects1.length = 0;
gdjs.CreditCode.GDNewTextObjects2.length = 0;

gdjs.CreditCode.eventsList1(runtimeScene);

return;

}

gdjs['CreditCode'] = gdjs.CreditCode;
