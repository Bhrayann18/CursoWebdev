/*! 28.0.2.0 */
/*! VersionVI: 01A280095g   */
var WDChamp=function(){"use strict";function n(n,t,i,r){arguments.length&&(this.m_sAliasChamp=n,t&&(this.m_sAliasTableZRParent=t,this.m_sAliasAttribut=i),this.m_pfConstructeursSupplementaires=r,this.m_tabChampsFils=new clWDUtil.WDTableauChamps,this.m_eEtat=this.ms_eEtatActif,this.m_eValide=0,this.m_bChampDansHTML=!0,this.m_bDansPlanAffiche=!0,this.m_nNbAnimationsActives=0)}function t(n,t,i){"number"==typeof i&&(i=clWDUtil.GetDimensionPxPourStyle(i));n.style[t]=i}n.prototype.ms_tabTablesZRs=new clWDUtil.WDTableauChamps;n.prototype.ms_nEventNavClick=0;n.prototype.ms_nEventNavBlur=10;n.prototype.ms_nEventNavChange=11;n.prototype.ms_nEventNavFocus=12;n.prototype.ms_nEventNavLoad=15;n.prototype.ms_nEventNavSubmit=18;n.prototype.ms_nEventNavSelectLigne=20;n.prototype.ms_nEventNavModifSimple=21;n.prototype.ms_nEventNavAffichageMois=28;n.prototype.ms_nEventNavSelectionJour=29;n.prototype.ms_nEventNavUploadSelection=30;n.prototype.ms_nEventNavUploadAvancement=31;n.prototype.ms_nEventNavAgendaRdvSelection=32;n.prototype.ms_nEventNavAgendaRdvDeplacement=33;n.prototype.ms_nEventNavAgendaRdvRedim=34;n.prototype.ms_nEventNavAgendaPeriodeSelect=35;n.prototype.ms_nEventNavAgendaRdvSupprime=36;n.prototype.ms_nEventNavAgendaRdvAjoute=37;n.prototype.ms_nEventNavAgendaRdvEdition=38;n.prototype.ms_nEventNavAgendaRdvModifTitre=39;n.prototype.ms_nEventNavPlanningRdvDeplacementRessource=40;n.prototype.ms_nEventNavCalendrierChangementMois=41;n.prototype.ms_nEventNavAgendaPeriodeAffiche=45;n.prototype.ms_nEventNavUploadFin=46;n.prototype.ms_nEventNavAffichageLigne=47;n.prototype.ms_nEventNavTdbAjoute=64;n.prototype.ms_nEventNavTdbSupprime=65;n.prototype.ms_nEventNavTdbDeplacement=66;n.prototype.ms_nEventNavTdbRedimensionnement=67;n.prototype.ms_nEventNavTdbWidgetRefresh=68;n.prototype.ms_nEventNavCarteChangePosition=69;n.prototype.ms_nEventNavCarteCreationCluster=91;n.prototype.ms_eEtatActif=0;n.prototype.ms_eEtatLectureSeule=1;n.prototype.ms_eEtatGrise=4;n.prototype.ms_nIDObjetSaisie=2;n.prototype.ms_nIDObjetLibelle=3;n.prototype.ms_nIDObjetBouton=4;n.prototype.ms_nIDObjetInterrupteur=5;n.prototype.ms_nIDObjetImage=8;n.prototype.ms_nIDObjetCombo=14;n.prototype.ms_nIDObjetCellule=39;n.prototype.ms_nIDObjetCodeBarre=91;n.prototype.ms_nIDObjetInterrupteurABascule=132;n.prototype.ms_nIDObjetChampAttributTable=136;var i="_";return n.prototype.ms_sSuffixeHote="_HTE",n.prototype.Init=function(){this._vInitInitiale();var n=this.oGetTableZRParent();n&&n.m_tabChampsFils.DeclareChamp(this);this.m_pfConstructeursSupplementaires&&(this.bGestionTableZR()?this.PourToutesLignesTableZR(this.__AppelConstructeursSupplementairesZR):this.m_pfConstructeursSupplementaires(this.m_sAliasChamp,this.m_sAliasChamp,undefined));this.m_eValide=1;this._vLiaisonHTML()},n.prototype._vInitInitiale=function(){clWDUtil.AttacheOnScrollResize(n.prototype.__s_OnScrollResize);n.prototype._vInitInitiale=clWDUtil.m_pfVide},n.prototype.__s_OnScrollResize=function(t,i){AppelMethodePtr(i?n.prototype.OnScroll:n.prototype.OnResize,[t],undefined)},n.prototype.__AppelConstructeursSupplementairesZR=function(n){var t=this.sGetNomElementAttributIndice(n,"");(document.getElementById(t)||(t="zrl_"+n+"_"+this.m_sAliasChamp,document.getElementById(t)))&&this.m_pfConstructeursSupplementaires(t,this.m_sAliasChamp,n)},n.prototype.AppelMethodeAutres=function(n,t){AppelMethode(n,t,this)},n.prototype.AppelMethodeAutresPtr=function(n,t){AppelMethodePtr(n,t,this)},n.prototype.RecuperePCode=function(n){return clWDUtil.pfGetTraitement(this.m_sAliasChamp,n)},n.prototype.nSetTimeout=function(n,t){var i=this,r=this.__tabArgumentsVersTableau(arguments,2);return clWDUtil.nSetTimeout(function(){n.apply(i,r)},t)},n.prototype.SetInterval=function(n,t,i){this[this.sNomVariableTimeXXX(n)]=setInterval(t,i)},n.prototype.__tabArgumentsVersTableau=function(n,t){return Array.prototype.slice.call(n,t)},n.prototype.nSetTimeoutUnique=function(n,t){this.AnnuleTimeXXX(n,!1);var i=this.nSetTimeout(this.TimeoutUnique,t,n,this.__tabArgumentsVersTableau(arguments,2));return this[this.sNomVariableTimeXXX(n)]=i,i},n.prototype.SetTimeoutUniqueO=function(n){var i=this.sNomVariableTimeXXX(n),r=this[i],t;undefined===r&&(t=this.__tabArgumentsVersTableau(arguments,1),this[i]=window.requestAnimationFrame?requestAnimationFrame(this.TimeoutUnique.bind(this,n,t)):this.nSetTimeout(this.TimeoutUnique,clWDUtil.ms_oTimeoutImmediat,n,t))},n.prototype.TimeoutUnique=function(n,t){this.SupprimeTimeout(n);this[n].apply(this,t)},n.prototype.bGetTimeXXXExiste=function(n){return this[this.sNomVariableTimeXXX(n)]!==undefined},n.prototype.AnnuleTimeXXX=function(n,t){var r=this.sNomVariableTimeXXX(n),i=this[r];i!==undefined&&(t?clearInterval(i):clWDUtil.ClearTimeout(i),delete this[r])},n.prototype.SupprimeTimeout=function(n){var t=this.sNomVariableTimeXXX(n);this[t]!==undefined&&delete this[t]},n.prototype.sNomVariableTimeXXX=function(n){return"m_nTimeXXX_"+n},n.prototype.SetEtat=function(n){this.m_eEtat=n},n.prototype.eGetEtat=function(){return this.m_eEtat},n.prototype.PreAffecteHTML=function(){this._vPreAffecteHTML.apply(this,arguments)},n.prototype._vPreAffecteHTML=clWDUtil.m_pfVide,n.prototype.PostAffecteHTML=function(){this._vPostAffecteHTML.apply(this,arguments)},n.prototype._vPostAffecteHTML=clWDUtil.m_pfVide,n.prototype.OnDisplay=function(){},n.prototype.ms_sOnDisplay="OnDisplay",n.prototype.OnResize=function(){clWDUtil.bDansPlanMasque(this.m_oChampFormulaire)||this._vOnResize.apply(this,arguments)},n.prototype._vOnResize=clWDUtil.m_pfVide,n.prototype._voGetConteneurPourPlanMasque=function(){},n.prototype.OnScroll=function(){this._vOnScroll.apply(this,arguments)},n.prototype._vOnScroll=clWDUtil.m_pfVide,n.prototype.OnSubmit=function(n){this.RecuperePCode(this.ms_nEventNavSubmit)(n)},n.prototype.SetValeur=function(n,t){return t},n.prototype.ms_sSetValeur="SetValeur",n.prototype.GetValeur=function(n,t){return t},n.prototype.ms_sGetValeur="GetValeur",n.prototype.DeduitParam=function(n){this._vDeduitParam(clWDUtil.oEvalJSON(n))},n.prototype._vDeduitParam=clWDUtil.m_pfVide,n.prototype.ConstruitParam=function(){var n=this._vsConstruitParam.apply(this,arguments);n.length>0&&this._vSetValeurChampFormulaire(n)},n.prototype._vsConstruitParam=function(){return""},n.prototype.Refresh=function(){this._vRefresh.apply(this,arguments)},n.prototype._vRefresh=clWDUtil.m_pfVide,n.prototype.MasqueBarre=function(){this._vMasqueBarre.apply(this,arguments)},n.prototype._vMasqueBarre=clWDUtil.m_pfVide,n.prototype.AnimationDebut=function(){this._vAnimationDebut.apply(this,arguments)},n.prototype._vAnimationDebut=function(){this.m_nNbAnimationsActives++},n.prototype.AnimationFin=function(){this._vAnimationFin.apply(this,arguments)},n.prototype._vAnimationFin=function(){this.m_nNbAnimationsActives--},n.prototype.OnLigneTableZRAffiche=function(){this._vOnLigneTableZRAffiche.apply(this,arguments)},n.prototype._vOnLigneTableZRAffiche=function(n){this.m_pfConstructeursSupplementaires&&this.__AppelConstructeursSupplementairesZR(n)},n.prototype.OnLigneTableZRMasque=function(){this._vOnLigneTableZRMasque.apply(this,arguments)},n.prototype._vOnLigneTableZRMasque=clWDUtil.m_pfVide,n.prototype.OnTableZRAfficheAJAX=function(){this._vOnTableZRAfficheAJAX.apply(this,arguments)},n.prototype._vOnTableZRAfficheAJAX=function(n){this.m_sAliasTableZRParent===n&&this._vOnTableZRAfficheAJAXInterne()},n.prototype._vOnTableZRAfficheAJAXInterne=clWDUtil.m_pfVide,n.prototype.XML_CHAMP_PROP_NUM_SOUSELEMENT=-2,n.prototype.XML_CHAMP_PROP_NUM_CONTENU=-1,n.prototype.XML_CHAMP_PROP_NUM_VALEUR=1,n.prototype.XML_CHAMP_PROP_NUM_LIBELLE=3,n.prototype.XML_CHAMP_PROP_NUM_NOTE=4,n.prototype.XML_CHAMP_PROP_NUM_HAUTEUR=5,n.prototype.XML_CHAMP_PROP_NUM_LARGEUR=6,n.prototype.XML_CHAMP_PROP_NUM_COULEUR=10,n.prototype.XML_CHAMP_PROP_NUM_COULEURFOND=11,n.prototype.XML_CHAMP_PROP_NUM_ETAT=12,n.prototype.XML_CHAMP_PROP_NUM_OCCURRENCE=14,n.prototype.XML_CHAMP_PROP_NUM_VISIBLE=18,n.prototype.XML_CHAMP_PROP_NUM_VALEURAFFICHEE=21,n.prototype.XML_CHAMP_PROP_NUM_TITRENOTE=27,n.prototype.XML_CHAMP_PROP_NUM_IMAGE=34,n.prototype.XML_CHAMP_PROP_NUM_URL=38,n.prototype.XML_CHAMP_PROP_NUM_BULLE=39,n.prototype.XML_CHAMP_PROP_NUM_X=41,n.prototype.XML_CHAMP_PROP_NUM_Y=42,n.prototype.XML_CHAMP_PROP_NUM_CURSEURSOURIS=43,n.prototype.XML_CHAMP_PROP_NUM_POLICEGRAS=47,n.prototype.XML_CHAMP_PROP_NUM_POLICEITALIQUE=48,n.prototype.XML_CHAMP_PROP_NUM_POLICENOM=49,n.prototype.XML_CHAMP_PROP_NUM_POLICESOULIGNE=50,n.prototype.XML_CHAMP_PROP_NUM_POLICETAILLE=51,n.prototype.XML_CHAMP_PROP_NUM_OPACITE=52,n.prototype.XML_CHAMP_PROP_NUM_CADRAGEH=53,n.prototype.XML_CHAMP_PROP_NUM_CADRAGEV=54,n.prototype.XML_CHAMP_PROP_NUM_SELECTIONNEE=55,n.prototype.XML_CHAMP_PROP_NUM_INDICATION=58,n.prototype.XML_CHAMP_PROP_NUM_BORNEMIN=64,n.prototype.XML_CHAMP_PROP_NUM_BORNEMAX=65,n.prototype.XML_CHAMP_PROP_NUM_BOUTONCALENDRIER=66,n.prototype.XML_CHAMP_PROP_NUM_VIGNETTE=68,n.prototype.XML_CHAMP_PROP_NUM_ENROULE=72,n.prototype.XML_CHAMP_PROP_NUM_VALEURINFERIEURE=89,n.prototype.XML_CHAMP_PROP_NUM_VALEURSUPERIEURE=90,n.prototype.XML_CHAMP_PROP_NUM_LIBELLEHTML=96,n.prototype.XML_CHAMP_PROP_NUM_MODECARTE=107,n.prototype.XML_CHAMP_PROP_NUM_ZOOM=108,n.prototype.XML_CHAMP_PROP_NUM_CLASSEHTML=113,n.prototype.XML_CHAMP_PROP_NUM_TEXTEALTERNATIF=115,n.prototype.XML_CHAMP_PROP_NUM_PLAN=118,n.prototype.XML_CHAMP_PROP_NUM_IMAGEFOND=122,n.prototype.XML_CHAMP_PROP_NUM_COULEURJAUGE=123,n.prototype.XML_CHAMP_PROP_NUM_TEXTESANSFORMAT=130,n.prototype.XML_CHAMP_PROP_NUM_BULLETITRE=131,n.prototype.XML_CHAMP_PROP_NUM_JETONLISTESEPARATEUR=133,n.prototype.XML_CHAMP_PROP_NUM_JETONAUTORISEDOUBLON=134,n.prototype.XML_CHAMP_PROP_NUM_INFOTRAFIC=137,n.prototype.XML_CHAMP_PROP_NUM_ANGLEROTATION=138,n.prototype.XML_CHAMP_PROP_NUM_ANGLEINCLINAISON=139,n.prototype.XML_CHAMP_PROP_NUM_MENUCONTEXTUEL=154,n.prototype.XML_CHAMP_PROP_NUM_ATTRIBUTHTML=155,n.prototype.s_oGetSetProp=function(n,t,i,r,u,f){return i?u?i.SetProp(f,r,n,t):i.GetProp(f,r,n,t):n},n.prototype.GetProp=function(n,t,i,r){switch(n){case this.XML_CHAMP_PROP_NUM_SOUSELEMENT:return null;case this.XML_CHAMP_PROP_NUM_VALEUR:return this.GetValeur(t,i,r);case this.XML_CHAMP_PROP_NUM_PLAN:var u=$(r);return u.wbPlanGet();default:return i}},n.prototype.ms_sGetProp="GetProp",n.prototype.SetProp=function(n,t,i,r){switch(n){case this.XML_CHAMP_PROP_NUM_VALEUR:return this.SetValeur(t,i,r);case this.XML_CHAMP_PROP_NUM_PLAN:var u=$(r);return u.wbPlanSet(i);default:return i}},n.prototype.ms_sSetProp="SetProp",n.prototype.vbZR=function(){return!1},n.prototype.bGestionTableZR=function(){return!!this.m_sAliasTableZRParent},n.prototype.oGetTableZRParent=function(){return this.bGestionTableZR()?this.ms_tabTablesZRs.oGetChampDirect(this.m_sAliasTableZRParent):undefined},n.prototype.sGetTableZRValeur=function(){return document.getElementsByName(this.m_sAliasTableZRParent)[0].value},n.prototype.nGetTableZRValeur=function(){return parseInt(this.sGetTableZRValeur(),10)},n.prototype.SetTableZRValeur=function(n,t,i){if(!i){var r=this.oGetTableZRParent();if(r){r.vTableZROnSelectLigne(t,n);return}}document.getElementsByName(this.m_sAliasTableZRParent)[0].value=t},n.prototype.SetTableZRValeurDirect=function(n){this.SetTableZRValeur(null,n,!0)},n.prototype.nGetTableZRDebut=function(){return parseInt(document.getElementsByName(this.m_sAliasTableZRParent+"_DEB")[0].value,10)},n.prototype.nGetTableZROccurrence=function(){return this.s_nGetTableZROccurrence(this.m_sAliasTableZRParent)},n.prototype.s_nGetTableZROccurrence=function(n){var t=document.getElementsByName("_"+n+"_OCC");return 0==t.length&&(t=document.getElementsByName(n+"_OCC")),0<t.length?parseInt(t[0].value,10):0},n.prototype.PourToutesLignesTableZR=function(n,t){for(var r=this.nGetTableZRDebut(),u=r+this.nGetTableZROccurrence(),i=r;i<u;i++)n.apply(this,[i,t])},n.prototype.oAppelSurLigneTableZR=function(n,t,i,r){var f=r,u;try{n!==undefined&&this.bGestionTableZR()&&(u=this.sGetTableZRValeur());u!==undefined&&u!=n?this.SetTableZRValeurDirect(n):u=undefined;f=t.apply(this,i)}finally{u!==undefined&&this.SetTableZRValeurDirect(u)}return f},n.prototype._OnChampModifie=function(n,t){if(n){var i=this.oGetTableZRParent();i&&i.vTableZROnValideLigne(n,this,t)}},n.prototype._vLiaisonHTML=function(n){n=n||"";var t;t=this.bGestionTableZR()?this.oGetElementByNameZR(document,n):this.oGetElementByName(document,n);t&&(this.m_oChampFormulaire=t)},n.prototype._sConstruitParamObjet=function(n){var r=[],i,t;for(i in n){t=n[i];switch(typeof t){case"boolean":t=t?"1":"0";break;case"string":case"number":default:t=encodeURIComponent(t);break;case"object":if(null!==t&&"function"==typeof t.getTime){t=t.getTime()+"";break}case"function":case"undefined":continue}r.push(i+"="+t.replace(/\,/g,"%2C"))}return r.join("&")},n.prototype._vsGetValeurChampFormulaire=function(){return this.m_oChampFormulaire?this.m_oChampFormulaire.value:""},n.prototype._vSetValeurChampFormulaire=function(n){this.m_oChampFormulaire&&(this.m_oChampFormulaire.value=n)},n.prototype._bEstGrise=function(n){return n?bIE?n.disabled:n.attributes.getNamedItem("disabled"):!1},n.prototype.sGetNomElement=function(n){return this.m_sAliasChamp+n},n.prototype.oGetElementById=function(n,t){return n.getElementById(this.sGetNomElement(t))},n.prototype.oGetElementByName=function(n,t){return n.getElementsByName(this.sGetNomElement(t))[0]},n.prototype.sGetSuffixeIDElement=function(){for(var t=[],r=arguments.length,n=0;n<r;n++)t.push(arguments[n]);return i+t.join(i)},n.prototype.oGetIDElement=function(){return this.oGetElementById(document,this.sGetSuffixeIDElement.apply(this,arguments))},n.prototype.sGetNomElementZR=function(n){return this.sGetNomElementZRCalc(this.bGestionTableZR(),n)},n.prototype.sGetNomElementZRCalc=function(n,t){return n?this.sGetNomElementAttributIndice(this.nGetTableZRValeur(),t):this.sGetNomElement(t)},n.prototype.sGetNomElementAttributIndice=function(n,t){return"zrl_"+n+"_"+this.m_sAliasAttribut+t},n.prototype.oGetElementByIdZR=function(n,t){return n.getElementById(this.sGetNomElementZRCalc(this.bGestionTableZR(),t))},n.prototype.oGetElementByNameZR=function(n,t){return this.oGetElementByNameZRCalc(this.bGestionTableZR(),n,t)},n.prototype.oGetElementByNameZRCalc=function(n,t,i){return t.getElementsByName(this.sGetNomElementZRCalc(n,i))[0]},n.prototype.oGetElementByIdZRIndice=function(n,t,i){return n.getElementById(this.sGetNomElementAttributIndice(t,i))||n.getElementById("zrl_"+t+"_"+this.m_sAliasChamp+i)},n.prototype.oGetObjectEmbed=function(n,t,i){var r=document.getElementsByName(n);if(r&&1<=r.length){if(r[0]&&(clWDUtil.bBaliseEstTag(r[0],"object")&&t||clWDUtil.bBaliseEstTag(r[0],"embed")&&i))return r[0];if(1<r.length&&r[1])return r[1]}return document.getElementById(n)},n.prototype.bConversionValeur=function(n){switch(typeof n){case"boolean":return n;case"string":return n!=="0";case"number":return n!==0;case"function":case"object":case"undefined":default:return!1}},n.prototype.s_dGetOffset=function(n){var t=parseFloat(n,10);return!isNaN(t)&&t>0?t:0},n.prototype.s_nGetOffsetBorderPourWidth=function(t){return Math.floor(n.prototype.s_dGetOffset(t.borderLeftWidth)+n.prototype.s_dGetOffset(t.borderRightWidth))},n.prototype.s_nGetOffsetBorderPourHeight=function(t){return Math.floor(n.prototype.s_dGetOffset(t.borderTopWidth)+n.prototype.s_dGetOffset(t.borderBottomWidth))},bIEQuirks?(n.prototype._nGetOffsetWidth=function(n,t){return undefined===t&&(t=n.currentStyle),n.offsetWidth-this.s_nGetOffsetBorderPourWidth(t)},n.prototype._nGetOffsetHeight=function(n,t){return undefined===t&&(t=n.currentStyle),n.offsetHeight-this.s_nGetOffsetBorderPourHeight(t)}):(n.prototype._nGetOffsetWidth=function(n){return n.offsetWidth},n.prototype._nGetOffsetHeight=function(n){return n.offsetHeight}),n.prototype._nGetLargeurAscenseurVertical=function(n){var t=n.clientWidth;return 0==t&&0==n.clientHeight?0:this._nGetOffsetWidth(n)-t},n.prototype._nGetHauteurAscenseurHorizontal=function(n){var t=n.clientHeight;return 0==t&&0==n.clientWidth?0:this._nGetOffsetHeight(n)-t},n.prototype.s_SetStyleLeft=function(n,i){t(n,"left",i)},n.prototype.s_SetStyleTop=function(n,i){t(n,"top",i)},n.prototype.s_SetStyleRight=function(n,i){t(n,"right",i)},n.prototype.s_SetStyleBottom=function(n,i){t(n,"bottom",i)},n.prototype.s_SetStyleWidth=function(n,i){t(n,"width",i)},n.prototype.s_SetStyleHeight=function(n,i){t(n,"height",i)},n.prototype.bAnimationsActives=function(){return 0<this.m_nNbAnimationsActives},n}(),WDChampParametres=function(){"use strict";function n(n,t,i,r,u){if(arguments.length){WDChamp.prototype.constructor.apply(this,arguments);var f=u[0],e=u[1];this.m_oParametres=f;this.m_oDonnees=e}}return n.prototype=new WDChamp,n.prototype.constructor=n,n.prototype.SetParametres=function(n,t){this.m_oParametres=n;var i;!1===t.m_bToutModifie?i=this._voFusionneDonne(t):this.m_oDonnees=t;this._vAppliqueParametres(i)},n.prototype._voFusionneDonne=clWDUtil.m_pfVide,n.prototype._vAppliqueParametres=clWDUtil.m_pfVide,n.prototype._vDeduitParam=function(n){WDChamp.prototype._vDeduitParam.apply(this,arguments);this.SetParametres.apply(this,n)},n.prototype._vLiaisonHTML=function(n,t){n=undefined!==n?n:"_DATA";WDChamp.prototype._vLiaisonHTML.apply(this,[n,t])},n.prototype._bGrise=function(){return this._vLiaisonHTML(),this._bEstGrise(this.m_oChampFormulaire)},n.prototype._bLectureSeuleOuGrise=function(){this._vLiaisonHTML();var n=this.m_oChampFormulaire;return bIE?n.disabled||n.readOnly:n.attributes.getNamedItem("disabled")||n.attributes.getNamedItem("readonly")},n.prototype.bLectureSeuleOuGriseExterne=function(n){return this.oAppelSurLigneTableZR(n,this._bLectureSeuleOuGrise,[],!0)},n}(),WDChampParametresHote=function(){"use strict";function n(){arguments.length&&(WDChampParametres.prototype.constructor.apply(this,arguments),this.m_oHote=null)}function t(n,t){return-1!=i(n,t).indexOf("%")}function i(n,t){var i=n.style[t];return""!=i?i:""}return n.prototype=new WDChampParametres,n.prototype.constructor=n,n.prototype._vLiaisonHTML=function(n,i){i=undefined!==i?i:this.ms_sSuffixeHote;WDChampParametres.prototype._vLiaisonHTML.apply(this,[n,i]);this.m_oHote=this.oGetElementByIdZR(document,i);this.m_oHote&&(this.m_bTailleVariable=t(this.m_oHote,"width")||t(this.m_oHote,"height")||!clWDUtil.bEstDisplay(this.m_oHote,document,bIEQuirks))},n}(),WDMenuContextuel=function(){"use strict";function n(n,t,i,u,f){if(arguments.length){this.m_tabOptionsDescription=t;this.m_pfCallbackSurFermeture=f;this.m_oSource=n&&clWDUtil.oGetOriginalTarget(n);this.m_nOptionSurvol=-1;var e=this;this.m_fOnMouseMove=function(n){return e.__OnMouseMove(n||event)};this.m_fOnClick=function(n){return e.__OnClick(n||event)};r();this.__CreeMenu(u);this.__Ouvre(n,i)}}function o(n,t,i){if(t){var r=t[n.m_sTraduction];r&&(n=r)}return i?n.sTitre:n.sLibelle}var t="wb-menu-contextuel",u="wb-menu-contextuel-separateur",f="wb-menu-contextuel-inactif",i="wb-menu-contextuel-survol",e="wb-menu-contextuel-animation",r;return n.prototype.ms_eOuvreSensAutomatique=-1,n.prototype.ms_eOuvreBasDroite=0,n.prototype.ms_eOuvreBasGauche=1,n.prototype.ms_eOuvreHautDroite=2,n.prototype.ms_eOuvreHautGauche=3,r=function(){var n=clWDUtil.oCreeFeuilleStyle();clWDUtil.CreeStyle(n,"ul."+t,"background-color:"+_COL[0]+";color:"+_COL[10]+";border:1px solid "+_COL[16]+";z-index:999;position:absolute;text-align:left;margin:0;padding:0;list-style-type:none;font-family:Arial,Helvetica,sans-serif;cursor:pointer;animation:"+e+" 300ms 1;");clWDUtil.CreeStyle(n,"ul."+t+" li","padding-right:1em");clWDUtil.CreeStyle(n,"ul."+t+" li."+u,"border-bottom:1px solid "+_COL[16]);clWDUtil.CreeStyle(n,"ul."+t+" li."+f,"cursor:default;font-style:italic");clWDUtil.CreeStyle(n,"ul."+t+" li."+i,"background-color:"+_COL[21]+";color:"+_COL[10]);clWDUtil.CreeStyle(n,"ul."+t+" li img","background-color:"+_COL[21]+";width:2em;height:2em;object-fit:none;margin-right:0.5em;vertical-align:middle");clWDUtil.CreeStyle(n,"ul."+t+" li."+i+" img","background-color:transparent");clWDUtil.CreeStyle(n,"@keyframes "+e,"0%{transform:scaleY(0.8);transform-origin:0% 0%;opacity:0;}100%{transform:scaleY(1);transform-origin:0% 0%;opacity: 1;}");r=clWDUtil.m_pfVide},n.prototype.__CreeMenu=function(n){var r=document.createElement("ul"),c,e,a,l;for(r.className=t,c=this.m_tabOptionsDescription,a=c.length,e=0;e<a;e++){var s=c[e],i=document.createElement("li"),h=[];s.m_bSeparateur&&h.push(u);s.m_bInactif&&h.push(f);h.length&&(i.className=h.join(" "));i.innerHTML=clWDUtil.sEncodeInnerHTML(o(s.m_oLibelle,n,!1));l=document.createElement("img");l.src=clWDUtil.sCheminImageRes(undefined,s.m_sImage||"vide.gif");i.insertBefore(l,i.firstChild);r.appendChild(i)}r.style.display="none";this.m_oMenu=document.body.appendChild(r);this.m_tabOptions=this.m_oMenu.getElementsByTagName("li")},n.prototype.__Ouvre=function(n,t){var f=clWDUtil.nSourisPosX(n,0),e=clWDUtil.nSourisPosY(n,0),o,s,h,c,i,r,u;this.ms_eOuvreSensAutomatique===t?(o=clWDUtil.__nGetBodyPropriete(document,"clientWidth"),h=clWDUtil.__nGetBodyPropriete(document,"clientHeight"),s=clWDUtil.__nGetBodyPropriete(document,"scrollWidth"),c=clWDUtil.__nGetBodyPropriete(document,"scrollHeight"),i=this.ms_eOuvreBasDroite):i=t;this.m_oMenu.style.display="";switch(t){case this.ms_eOuvreBasGauche:r=this.m_oMenu.offsetWidth-1;break;case this.ms_eOuvreHautDroite:u=this.m_oMenu.offsetHeight-1;break;case this.ms_eOuvreHautGauche:case this.ms_eOuvreSensAutomatique:r=this.m_oMenu.offsetWidth-1;u=this.m_oMenu.offsetHeight-1}for(;;){switch(i){case this.ms_eOuvreBasGauche:f-=r;break;case this.ms_eOuvreHautDroite:e-=u;break;case this.ms_eOuvreHautGauche:f-=r;e-=u}if(this.m_oMenu.style.left=clWDUtil.GetDimensionPxPourStyle(f),this.m_oMenu.style.top=clWDUtil.GetDimensionPxPourStyle(e),this.ms_eOuvreSensAutomatique===t&&(clWDUtil.__nGetBodyPropriete(document,"clientWidth")<o||clWDUtil.__nGetBodyPropriete(document,"clientHeight")<h||s<clWDUtil.__nGetBodyPropriete(document,"scrollWidth")||c<clWDUtil.__nGetBodyPropriete(document,"scrollHeight")))i<this.ms_eOuvreHautGauche?i++:(t=this.ms_eOuvreBasDroite,i=this.ms_eOuvreBasDroite);else break}undefined!==r&&(this.m_oMenu.style.width=clWDUtil.GetDimensionPxPourStyle(r+1));clWDUtil.AttacheDetacheEvent(!0,document,"mousemove",this.m_fOnMouseMove,!1);clWDUtil.AttacheDetacheEvent(!0,this.m_oMenu,"click",this.m_fOnClick,!1);this.__Selection(null)},n.prototype.__Selection=function(n){var f=this.m_nOptionSurvol,r=-1,u,t,e;if(n)for(u=this.m_tabOptions,e=u.length,t=0;t<e;t++)if(clWDUtil.bEstFils(n,u[t])){r=this.m_tabOptionsDescription[t].m_bInactif?-1:t;break}r!=f&&(this.__SetStyleOption(f,i,undefined),this.__SetStyleOption(r,undefined,i),this.m_nOptionSurvol=r)},n.prototype.__SetStyleOption=function(n,t,i){-1!=n&&clWDUtil.RemplaceClassName(this.m_tabOptions[n],t,i)},n.prototype.__Masque=function(){clWDUtil.AttacheDetacheEvent(!1,this.m_oMenu,"click",this.m_fOnClick,!1);clWDUtil.AttacheDetacheEvent(!1,document,"mousemove",this.m_fOnMouseMove,!1);clWDUtil.oSupprimeElement(this.m_oMenu);this.m_pfCallbackSurFermeture&&this.m_pfCallbackSurFermeture()},n.prototype.__OnMouseMove=function(n){var t=clWDUtil.oGetTarget(n);clWDUtil.bEstFils(t,this.m_oMenu)?this.__Selection(t):this.m_oSource&&clWDUtil.bEstFils(t,this.m_oSource)||this.__Masque()},n.prototype.__OnClick=function(n){var t=this.m_nOptionSurvol;-1!=t&&(this._vAction(n,this.m_tabOptionsDescription[t]),this.__Masque())},n}()