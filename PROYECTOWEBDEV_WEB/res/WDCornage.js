/*! 27.0.1.0 */
/*! VersionVI: 01A280095g   */
function WDCornage(n,t,i,r,u){if(arguments.length){WDChamp.prototype.constructor.apply(this,arguments);var f=u[0];this.m_eCoin=f}}function sExtraitImage(n,t,i){return n.substring(n.indexOf(t)+1,n.lastIndexOf(i==null?t:i))}function FinAnim(n){return n!=null&&(n.vAnnule(),delete n),null}WDCornage.prototype=new WDChamp;WDCornage.prototype.constructor=WDCornage;WDCornage.prototype.ms_nCoinHautGauche=0;WDCornage.prototype.ms_nCoinHautDroit=1;WDCornage.prototype.ms_nCoinBasGauche=2;WDCornage.prototype.ms_nCoinBasDroit=3;WDCornage.prototype.ms_nDelta=10;WDCornage.prototype.ms_nDelai=10;WDCornage.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments);this.m_oObjet=document.getElementById(this.m_sAliasChamp);this.InitTailleImageStyle(clWDUtil.oGetCurrentStyle(this.m_oObjet).backgroundImage);this.m_nLargeurInit=this.nGetLargeur();this.m_nHauteurInit=this.nGetHauteur();this.m_nTimer=null;var n=this;this.m_oObjet.onmouseover=function(t){n.OnMouseOver(t||event)};this.m_oObjet.onmouseout=function(t){n.OnMouseOut(t||event)};this.m_pfCallBack=function(){n.Anim()}};WDCornage.prototype.InitTailleImageStyle=function(n){var t=sExtraitImage(n,'"');t==""&&(t=sExtraitImage(n,"'"),t==""&&(t=sExtraitImage(n,"(",")")));this.InitTailleImage(t)};WDCornage.prototype.ms_sInitTailleImage="InitTailleImage";WDCornage.prototype.InitTailleImage=function(n){this.m_oImage=new Image;this.m_oImage.src=n};WDCornage.prototype.nGetLargeur=function(){return this.m_oObjet.offsetWidth};WDCornage.prototype.nGetHauteur=function(){return this.m_oObjet.offsetHeight};WDCornage.prototype.nDelta=function(n,t,i){var r=n>t?-1:1;return(this.m_bOuvre?1:-1)*r*Math.min(Math.max(1,Math.round(r*(t-n)/this.ms_nDelta)),r*(this.m_bOuvre?t-i:i-n))};WDCornage.prototype.sValeurStyle=function(n){return n+"px"};WDCornage.prototype.Anim=function(){var f=this.nGetLargeur(),t=this.nDelta(this.m_nLargeurInit,this.m_oImage.width,f),e=this.nGetHauteur(),i=this.nDelta(this.m_nHauteurInit,this.m_oImage.height,e),r=this.m_oObjet,n=r.style,o=t!=0,u;o&&((this.m_eCoin==this.ms_nCoinHautDroit||this.m_eCoin==this.ms_nCoinBasDroit)&&(n.left=this.sValeurStyle(r.offsetLeft-t)),n.width=this.sValeurStyle(f+t));u=i!=0;u&&(this.m_eCoin>this.ms_nCoinHautDroit&&(n.top=this.sValeurStyle(r.offsetTop-i)),n.height=this.sValeurStyle(e+i));this.m_nTimer=o||u?clWDUtil.nSetTimeout(this.m_pfCallBack,this.ms_nDelai):null};WDCornage.prototype.LanceAnim=function(n){n!=this.m_bOuvre&&(this.m_nTimer!=null&&(clWDUtil.ClearTimeout(this.m_nTimer),this.m_nTimer=null),this.m_bOuvre=n);this.m_nTimer==null&&this.Anim()};WDCornage.prototype.OnMouseOver=function(){this.LanceAnim(!0)};WDCornage.prototype.OnMouseOut=function(){this.LanceAnim(!1)}