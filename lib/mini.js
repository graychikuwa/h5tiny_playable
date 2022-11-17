!function(i){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=i,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=13)}([function(t,e,i){i(1),window.Tiny=i(2),i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(10),i(11),i(12)},function(t,e){Date.now||(Date.now=function(){return(new Date).getTime()}),"undefined"==typeof Float32Array&&(window.Float32Array=Array)},function(t,e){function s(t,e,i,n,r){i=i?document.getElementById(i):document.body,this._preboot(t,e,n,r),this.renderer=new s.CanvasRenderer(this.width,this.height,{autoResize:!0}),t=this.canvas=this.inputView=this.renderer.view,i.appendChild(t),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.transformOrigin="0% 0%",t.style.perspective="1000px",this._boot()}s.prototype._preload=function(){this.preload.call(this.callbackContext),this.state=1,s.Loader?this.load.start(this._create):this._create()},s.prototype.setPixelRatio=function(t){this.renderer.resolution=t},s.prototype._render=function(){this.renderer.render(this.stage)},s.prototype.resize=function(t,e,i){this._resize(t,e,i)},s.prototype.destroy=function(){this._destroy()},t.exports=s},function(t,e){function r(){}var i,s=!1,n={_preboot:function(t,e,i,n){this.height=e||720,this.width=t||430,n=n||{},(this.callbackContext=this).state=0,this.preload=this.preload||n.preload||r,this.create=this.create||n.create||r,this.update=this.update||n.update||r,this._resize_cb=this._resize_cb||n.resize||r,this._destroy_cb=this._destroy_cb||n.destroy||r,this.stage=new Tiny.Stage(this),"object"==typeof window.TWEEN&&(s=!0),this._raf=i&&Tiny.RAF,this.time={timeToCall:15},this.paused=!1,this.pauseDuration=0,this.tweens=[]},_boot:function(){Tiny.Loader&&(this.load=new Tiny.Loader(this)),Tiny.ObjectCreator&&(this.add=new Tiny.ObjectCreator(this)),Tiny.Input&&(this.input=new Tiny.Input(this)),Tiny.TimerCreator&&(this.timer=new Tiny.TimerCreator(this)),Tiny.Particles&&(this.particles=new Tiny.Particles(this)),this._raf&&(this.raf=new Tiny.RAF(this)),Tiny.defaultRenderer=this.renderer;var t=this;setTimeout(function(){t._preload()},0)},_resize:function(t,e,i){this.width=t||this.width,this.height=e||this.height,this.renderer.resize(this.width,this.height),0<this.state&&this._resize_cb.call(this.callbackContext,this.width,this.height,i)},_create:function(){this.create.call(this.callbackContext),this._raf&&this.raf.start(),this.state=2},pause:function(){if(this._raf&&this.raf.reset(),!this.paused){if(s)for(var t in this.tweens.length=0,TWEEN._tweens)this.tweens.push(TWEEN._tweens[t]),TWEEN._tweens[t].pause();this.paused=!0}},resume:function(){this._raf&&this.raf.reset(),this.paused&&(s&&(this.tweens.forEach(function(t){t.resume()}),this.tweens.length=0),this.paused=!1)},_update:function(t,e){this.paused?(this.pauseDuration+=e,this.stage.updateTransform()):(this.update.call(this.callbackContext,t,e),s&&TWEEN.update(),this.timers&&this.timers.forEach(function(t){t.update(e)}),this.stage.updateTransform(),this.particles&&this.particles.update(e)),this._render()},_destroy:function(){for(var t in Tiny.Input&&this.input.destroy(),s&&TWEEN.removeAll(),this.timers&&this.timer.removeAll(),this.paused=!0,this.stage.destroy(),Tiny.TextureCache)Tiny.TextureCache[t].destroy(!0);for(var t in Tiny.BaseTextureCache)Tiny.BaseTextureCache[t].destroy();Tiny.BaseTextureCache=[],Tiny.TextureCache=[],this.stage.children=[],this.update(),this.renderer.destroy(!0),this._raf&&this.raf.stop(),this._destroy_cb.call(this.callbackContext)}};for(i in n.stop=n.pause,n.play=n.resume,n.setSize=n.resize,n)Tiny.prototype[i]=n[i]},function(t,e){Tiny.VERSION="1.4.9",Tiny._UID=0,Tiny.Polygon=function(){},Tiny.Primitives={POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4,RREC_LJOIN:5},Tiny.rnd=function(t,e){return t+Math.floor(Math.random()*(e-t+1))},Tiny.hex2rgb=function(t){return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]},Tiny.rgb2hex=function(t){return(255*t[0]<<16)+(255*t[1]<<8)+255*t[2]},Tiny.getNextPowerOfTwo=function(t){if(0<t&&0==(t&t-1))return t;for(var e=1;e<t;)e<<=1;return e},Tiny.isPowerOfTwo=function(t,e){return 0<t&&0==(t&t-1)&&0<e&&0==(e&e-1)}},function(t,e){Tiny.Math={distance:function(t,e,i,n){t-=i,i=e-n;return Math.sqrt(t*t+i*i)}};var i=Math.PI/180,n=180/Math.PI;Tiny.Math.degToRad=function(t){return t*i},Tiny.Math.radToDeg=function(t){return t*n}},function(t,e){Tiny.Point=function(t,e){this.x=t||0,this.y=e||0},Tiny.Point.prototype={set:function(t,e){return this.x=t||0,this.y=e||(0!==e?this.x:0),this},setTo:function(t,e){this.set(t,e)}}},function(t,e){Tiny.Matrix=function(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this.type=Tiny.MATRIX},Tiny.Matrix.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},Tiny.Matrix.prototype.toArray=function(t){this.array||(this.array=new Float32Array(9));var e=this.array;return t?(e[0]=this.a,e[1]=this.b,e[2]=0,e[3]=this.c,e[4]=this.d,e[5]=0,e[6]=this.tx,e[7]=this.ty):(e[0]=this.a,e[1]=this.c,e[2]=this.tx,e[3]=this.b,e[4]=this.d,e[5]=this.ty,e[6]=0,e[7]=0),e[8]=1,e},Tiny.Matrix.prototype.apply=function(t,e){e=e||new Tiny.Point;var i=t.x,t=t.y;return e.x=this.a*i+this.c*t+this.tx,e.y=this.b*i+this.d*t+this.ty,e},Tiny.Matrix.prototype.applyInverse=function(t,e){e=e||new Tiny.Point;var i=1/(this.a*this.d+this.c*-this.b),n=t.x,t=t.y;return e.x=this.d*i*n+-this.c*i*t+(this.ty*this.c-this.tx*this.d)*i,e.y=this.a*i*t+-this.b*i*n+(-this.ty*this.a+this.tx*this.b)*i,e},Tiny.Matrix.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},Tiny.Matrix.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},Tiny.Matrix.prototype.rotate=function(t){var e=Math.cos(t),t=Math.sin(t),i=this.a,n=this.c,r=this.tx;return this.a=i*e-this.b*t,this.b=i*t+this.b*e,this.c=n*e-this.d*t,this.d=n*t+this.d*e,this.tx=r*e-this.ty*t,this.ty=r*t+this.ty*e,this},Tiny.Matrix.prototype.append=function(t){var e=this.a,i=this.b,n=this.c,r=this.d;return this.a=t.a*e+t.b*n,this.b=t.a*i+t.b*r,this.c=t.c*e+t.d*n,this.d=t.c*i+t.d*r,this.tx=t.tx*e+t.ty*n+this.tx,this.ty=t.tx*i+t.ty*r+this.ty,this},Tiny.Matrix.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},Tiny.identityMatrix=new Tiny.Matrix},function(t,e){Tiny.Rectangle=function(t,e,i,n){e=e||0,i=i||0,n=n||0,this.x=t=t||0,this.y=e,this.width=i,this.height=n,this.type=Tiny.Primitives.RECT},Tiny.Rectangle.prototype={setTo:function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},contains:function(t,e){return Tiny.Rectangle.contains(this,t,e)},intersects:function(t){return Tiny.Rectangle.intersects(this,t)}},Object.defineProperty(Tiny.Rectangle.prototype,"bottom",{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}}),Object.defineProperty(Tiny.Rectangle.prototype,"right",{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}}),Object.defineProperty(Tiny.Rectangle.prototype,"volume",{get:function(){return this.width*this.height}}),Tiny.Rectangle.prototype.constructor=Tiny.Rectangle,Tiny.Rectangle.contains=function(t,e,i){return!(t.width<=0||t.height<=0)&&(e>=t.x&&e<t.right&&i>=t.y&&i<t.bottom)},Tiny.Rectangle.containsPoint=function(t,e){return Tiny.Rectangle.contains(t,e.x,e.y)},Tiny.Rectangle.containsRect=function(t,e){return!(t.volume>e.volume)&&(t.x>=e.x&&t.y>=e.y&&t.right<e.right&&t.bottom<e.bottom)},Tiny.Rectangle.intersects=function(t,e){return!(t.width<=0||t.height<=0||e.width<=0||e.height<=0)&&!(t.right<e.x||t.bottom<e.y||t.x>e.right||t.y>e.bottom)},Tiny.EmptyRectangle=new Tiny.Rectangle(0,0,0,0)},function(t,e){var a=2*Math.PI;Tiny.DisplayObject=function(){this.position=new Tiny.Point(0,0),this.scale=new Tiny.Point(1,1),this.pivot=new Tiny.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this.worldTransform=new Tiny.Matrix,this._sr=0,this._cr=1,this._bounds=new Tiny.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cacheIsDirty=!1,this.input=null},Object.defineProperty(Tiny.DisplayObject.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(t){t?null===this.input?(this.input={enabled:!0,parent:this},Tiny.EventTarget.mixin(this.input)):this.input.enabled=!0:null!==this.input&&(this.input.enabled=!1)}}),Tiny.DisplayObject.prototype.constructor=Tiny.DisplayObject,Tiny.DisplayObject.prototype.destroy=function(){if(this.children){for(var t=this.children.length;t--;)this.children[t].destroy();this.children=[]}this.parent&&this.parent.removeChild(this),this.hitArea=null,this.parent=null,this.stage=null,this.worldTransform=null,this._bounds=null,this._currentBounds=null,this._mask=null,this.renderable=!1,this._destroyCachedSprite()},Object.defineProperty(Tiny.DisplayObject.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1}while(t=t.parent);return!0}}),Object.defineProperty(Tiny.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(t){this._mask&&(this._mask.isMask=!1),this._mask=t,this._mask&&(this._mask.isMask=!0)}}),Object.defineProperty(Tiny.DisplayObject.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(t){this._cacheAsBitmap!==t&&(t?this._generateCachedSprite():this._destroyCachedSprite(),this._cacheAsBitmap=t)}}),Tiny.DisplayObject.prototype.updateTransform=function(){var t,e,i,n,r,s,h,o;this.parent&&(t=this.parent.worldTransform,e=this.worldTransform,this.rotation%a?(this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation)),i=this._cr*this.scale.x,n=this._sr*this.scale.x,r=-this._sr*this.scale.y,s=this._cr*this.scale.y,h=this.position.x,o=this.position.y,(this.pivot.x||this.pivot.y)&&(h-=this.pivot.x*i+this.pivot.y*r,o-=this.pivot.x*n+this.pivot.y*s),e.a=i*t.a+n*t.c,e.b=i*t.b+n*t.d,e.c=r*t.a+s*t.c,e.d=r*t.b+s*t.d):(i=this.scale.x,s=this.scale.y,h=this.position.x-this.pivot.x*i,o=this.position.y-this.pivot.y*s,e.a=i*t.a,e.b=i*t.b,e.c=s*t.c,e.d=s*t.d),e.tx=h*t.a+o*t.c+t.tx,e.ty=h*t.b+o*t.d+t.ty,this.worldAlpha=this.alpha*this.parent.worldAlpha)},Tiny.DisplayObject.prototype.displayObjectUpdateTransform=Tiny.DisplayObject.prototype.updateTransform,Tiny.DisplayObject.prototype.getBounds=function(t){return Tiny.EmptyRectangle},Tiny.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(Tiny.identityMatrix)},Tiny.DisplayObject.prototype.setStageReference=function(t){this.stage=t},Tiny.DisplayObject.prototype.preUpdate=function(){},Tiny.DisplayObject.prototype.generateTexture=function(t,e){var i=this.getLocalBounds(),e=new Tiny.RenderTexture(0|i.width,0|i.height,e,t);return Tiny.DisplayObject._tempMatrix.tx=-i.x,Tiny.DisplayObject._tempMatrix.ty=-i.y,e.render(this,Tiny.DisplayObject._tempMatrix),e},Tiny.DisplayObject.prototype.updateCache=function(){this._generateCachedSprite()},Tiny.DisplayObject.prototype.toGlobal=function(t){return this.displayObjectUpdateTransform(),this.worldTransform.apply(t)},Tiny.DisplayObject.prototype.toLocal=function(t,e){return e&&(t=e.toGlobal(t)),this.displayObjectUpdateTransform(),this.worldTransform.applyInverse(t)},Tiny.DisplayObject.prototype._renderCachedSprite=function(t){this._cachedSprite.worldAlpha=this.worldAlpha,Tiny.Sprite.prototype._renderCanvas.call(this._cachedSprite,t)},Tiny.DisplayObject.prototype._generateCachedSprite=function(){this._cachedSprite=null,this._cacheAsBitmap=!1;var t,e=this.getLocalBounds();this._cachedSprite?this._cachedSprite.texture.resize(0|e.width,0|e.height):(t=new Tiny.RenderTexture(0|e.width,0|e.height),this._cachedSprite=new Tiny.Sprite(t),this._cachedSprite.worldTransform=this.worldTransform),Tiny.DisplayObject._tempMatrix.tx=-e.x,Tiny.DisplayObject._tempMatrix.ty=-e.y,this._cachedSprite.texture.render(this,Tiny.DisplayObject._tempMatrix,!0),this._cachedSprite.anchor.x=-(e.x/e.width),this._cachedSprite.anchor.y=-(e.y/e.height),this._cacheAsBitmap=!0},Tiny.DisplayObject.prototype._destroyCachedSprite=function(){this._cachedSprite&&(this._cachedSprite.texture.destroy(!0),this._cachedSprite=null)},Tiny.DisplayObject.prototype._renderCanvas=function(t){},Object.defineProperty(Tiny.DisplayObject.prototype,"x",{get:function(){return this.position.x},set:function(t){this.position.x=t}}),Object.defineProperty(Tiny.DisplayObject.prototype,"y",{get:function(){return this.position.y},set:function(t){this.position.y=t}}),Tiny.DisplayObject._tempMatrix=new Tiny.Matrix},function(t,e){Tiny.DisplayObjectContainer=function(){Tiny.DisplayObject.call(this),this.children=[]},Tiny.DisplayObjectContainer.prototype=Object.create(Tiny.DisplayObject.prototype),Tiny.DisplayObjectContainer.prototype.constructor=Tiny.DisplayObjectContainer,Object.defineProperty(Tiny.DisplayObjectContainer.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;this.scale.x=0!==e?t/e:1,this._width=t}}),Object.defineProperty(Tiny.DisplayObjectContainer.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;this.scale.y=0!==e?t/e:1,this._height=t}}),Tiny.DisplayObjectContainer.prototype.addChild=function(t){return this.addChildAt(t,this.children.length)},Tiny.DisplayObjectContainer.prototype.addChildAt=function(t,e){if(0<=e&&e<=this.children.length)return t.parent&&t.parent.removeChild(t),t.parent=this,t.game=this.game,this.children.splice(e,0,t),this.stage&&t.setStageReference(this.stage),t;throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length)},Tiny.DisplayObjectContainer.prototype.swapChildren=function(t,e){if(t!==e){var i=this.getChildIndex(t),n=this.getChildIndex(e);if(i<0||n<0)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[i]=e,this.children[n]=t}},Tiny.DisplayObjectContainer.prototype.getChildIndex=function(t){t=this.children.indexOf(t);if(-1===t)throw new Error("The supplied DisplayObject must be a child of the caller");return t},Tiny.DisplayObjectContainer.prototype.setChildIndex=function(t,e){if(e<0||e>=this.children.length)throw new Error("The supplied index is out of bounds");var i=this.getChildIndex(t);this.children.splice(i,1),this.children.splice(e,0,t)},Tiny.DisplayObjectContainer.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Supplied index "+t+" does not exist in the child list, or the supplied DisplayObject must be a child of the caller");return this.children[t]},Tiny.DisplayObjectContainer.prototype.removeChild=function(t){t=this.children.indexOf(t);if(-1!==t)return this.removeChildAt(t)},Tiny.DisplayObjectContainer.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return this.stage&&e.removeStageReference(),e.parent=void 0,this.children.splice(t,1),e},Tiny.DisplayObjectContainer.prototype.removeChildren=function(t,e){var t=t||0,e="number"==typeof e?e:this.children.length,i=e-t;if(0<i&&i<=e){for(var n=this.children.splice(t,i),r=0;r<n.length;r++){var s=n[r];this.stage&&s.removeStageReference(),s.parent=void 0}return n}if(0==i&&0===this.children.length)return[];throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range")},Tiny.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible&&(this.displayObjectUpdateTransform(),!this._cacheAsBitmap))for(var t=0,e=this.children.length;t<e;t++)this.children[t].updateTransform()},Tiny.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform=Tiny.DisplayObjectContainer.prototype.updateTransform,Tiny.DisplayObjectContainer.prototype.getBounds=function(){if(0===this.children.length)return Tiny.EmptyRectangle;if(this._cachedSprite)return this._cachedSprite.getBounds();for(var t,e,i=1/0,n=1/0,r=-1/0,s=-1/0,h=!1,o=0,a=this.children.length;o<a;o++)this.children[o].visible&&(h=!0,i=i<(t=this.children[o].getBounds()).x?i:t.x,n=n<t.y?n:t.y,r=(e=t.width+t.x)<r?r:e,s=(e=t.height+t.y)<s?s:e);if(!h)return Tiny.EmptyRectangle;var c=this._bounds;return c.x=i,c.y=n,c.width=r-i,c.height=s-n,c},Tiny.DisplayObjectContainer.prototype.getLocalBounds=function(){var t=this.worldTransform;this.worldTransform=Tiny.identityMatrix;for(var e=0,i=this.children.length;e<i;e++)this.children[e].updateTransform();var n=this.getBounds();return this.worldTransform=t,n},Tiny.DisplayObjectContainer.prototype.setStageReference=function(t){this.stage=t;for(var e=0;e<this.children.length;e++)this.children[e].setStageReference(t)},Tiny.DisplayObjectContainer.prototype.removeStageReference=function(){for(var t=0;t<this.children.length;t++)this.children[t].removeStageReference();this.stage=null},Tiny.DisplayObjectContainer.prototype._renderCanvas=function(t){if(!1!==this.visible&&0!==this.alpha)if(this._cacheAsBitmap)this._renderCachedSprite(t);else{this._mask&&t.maskManager.pushMask(this._mask,t);for(var e=0;e<this.children.length;e++)this.children[e]._renderCanvas(t);this._mask&&t.maskManager.popMask(t)}}},function(t,e){Tiny.Stage=function(t){Tiny.DisplayObjectContainer.call(this),this.worldTransform=new Tiny.Matrix,this.game=t,(this.stage=this).setBackgroundColor(16777215)},Tiny.Stage.prototype=Object.create(Tiny.DisplayObjectContainer.prototype),Tiny.Stage.prototype.constructor=Tiny.Stage,Tiny.Stage.prototype.updateTransform=function(){this.worldAlpha=1;for(var t=0;t<this.children.length;t++)this.children[t].updateTransform()},Tiny.Stage.prototype.setBackgroundColor=function(t){this.backgroundColor=t||0,this.backgroundColorSplit=Tiny.hex2rgb(this.backgroundColor);t=this.backgroundColor.toString(16),t="000000".substr(0,6-t.length)+t;this.backgroundColorString="#"+t}},function(t,e){Tiny.CanvasRenderer=function(t,e,i){this.resolution=null!=(i=i||{}).resolution?i.resolution:1,this.clearBeforeRender=null==i.clearBeforeRender||i.clearBeforeRender,this.transparent=null!=i.transparent&&i.transparent,this.autoResize=i.autoResize||!1,this.width=t||800,this.height=e||600,this.width*=this.resolution,this.height*=this.resolution,this.view=i.view||document.createElement("canvas"),this.context=this.view.getContext("2d",{alpha:this.transparent}),this.view.width=this.width,this.view.height=this.height,Tiny.CanvasMaskManager&&(this.maskManager=new Tiny.CanvasMaskManager),this.renderSession={context:this.context,maskManager:this.maskManager,smoothProperty:null,roundPixels:!1},this.resize(t,e),"imageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="imageSmoothingEnabled":"webkitImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="webkitImageSmoothingEnabled":"mozImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="mozImageSmoothingEnabled":"oImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="oImageSmoothingEnabled":"msImageSmoothingEnabled"in this.context&&(this.renderSession.smoothProperty="msImageSmoothingEnabled")},Tiny.CanvasRenderer.prototype.constructor=Tiny.CanvasRenderer,Tiny.CanvasRenderer.prototype.render=function(t){this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,this.renderSession.currentBlendMode="source-over",this.context.globalCompositeOperation="source-over",navigator.isCocoonJS&&this.view.screencanvas&&(this.context.fillStyle="black",this.context.clear()),this.clearBeforeRender&&(this.transparent?this.context.clearRect(0,0,this.width,this.height):(this.context.fillStyle=t.backgroundColorString,this.context.fillRect(0,0,this.width,this.height))),this.renderDisplayObject(t)},Tiny.CanvasRenderer.prototype.destroy=function(t){(t=void 0===t?!0:t)&&this.view.parentNode&&this.view.parentNode.removeChild(this.view),this.view=null,this.context=null,this.maskManager=null,this.renderSession=null},Tiny.CanvasRenderer.prototype.resize=function(t,e){this.width=t*this.resolution,this.height=e*this.resolution,this.view.width=this.width,this.view.height=this.height,this.autoResize&&(this.view.style.width=this.width/this.resolution+"px",this.view.style.height=this.height/this.resolution+"px")},Tiny.CanvasRenderer.prototype.renderDisplayObject=function(t,e){this.renderSession.context=e||this.context,this.renderSession.resolution=this.resolution,t._renderCanvas(this.renderSession)}},function(t,e,i){i(0),i(14),i(15),i(16),i(17),i(18)},function(t,e){var r,s,h,o,a,i=function(){return(new Date).getTime()};void 0!==self.performance&&void 0!==self.performance.now?i=self.performance.now.bind(self.performance):void 0!==Date.now&&(i=Date.now),Tiny.RAF=function(t,e){void 0===e&&(e=!1),this.game=t,this.isRunning=!1,this.forceSetTimeOut=e;for(var i=["ms","moz","webkit","o"],n=0;n<i.length&&!window.requestAnimationFrame;n++)window.requestAnimationFrame=window[i[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[n]+"CancelAnimationFrame"]||window[i[n]+"CancelRequestAnimationFrame"];r=!1,h=s=null,a=o=0},Tiny.RAF.prototype={start:function(){o=i(),this.isRunning=!0;var t=this;h=!window.requestAnimationFrame||this.forceSetTimeOut?(r=!0,s=function(){return t.updateSetTimeout()},window.setTimeout(s,0)):(r=!1,s=function(){return t.updateRAF()},window.requestAnimationFrame(s))},updateRAF:function(){a=i(),this.isRunning&&(this.game._update(Math.floor(a),a-o),h=window.requestAnimationFrame(s)),o=a},updateSetTimeout:function(){a=i(),this.isRunning&&(this.game._update(Math.floor(a),a-o),h=window.setTimeout(s,this.game.time.timeToCall)),o=a},reset:function(){o=i()},stop:function(){r?clearTimeout(h):window.cancelAnimationFrame(h),this.isRunning=!1}}},function(t,e){Tiny.BaseTextureCache={},Tiny.BaseTextureCacheIdGenerator=0,Tiny.BaseTexture=function(t){var e;this.resolution=1,this.width=100,this.height=100,this.hasLoaded=!1,this.source=t,this.uid=Tiny._UID++,t&&((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height?(this.hasLoaded=!0,this.width=this.source.naturalWidth||this.source.width,this.height=this.source.naturalHeight||this.source.height):(e=this).source.onload=function(){e.hasLoaded=!0,e.width=e.source.naturalWidth||e.source.width,e.height=e.source.naturalHeight||e.source.height},this.imageUrl=null)},Tiny.BaseTexture.prototype.constructor=Tiny.BaseTexture,Tiny.BaseTexture.prototype.destroy=function(){this.imageUrl?(delete Tiny.BaseTextureCache[this.key],delete Tiny.TextureCache[this.key],this.imageUrl=null,navigator.isCocoonJS||(this.source.src="")):this.source&&this.source._pixiId&&delete Tiny.BaseTextureCache[this.source._pixiId],this.source=null},Tiny.BaseTexture.fromImage=function(t,e,i){var n,r=Tiny.BaseTextureCache[t];return void 0===i&&-1===e.indexOf("data:")&&(i=!0),r||(n=new Image,i&&(n.crossOrigin=""),n.src=e,(r=new Tiny.BaseTexture(n)).imageUrl=e,r.key=t,Tiny.BaseTextureCache[t]=r),r},Tiny.BaseTexture.fromCanvas=function(t){t._pixiId||(t._pixiId="canvas_"+Tiny.TextureCacheIdGenerator++);var e=Tiny.BaseTextureCache[t._pixiId];return e||(e=new Tiny.BaseTexture(t),Tiny.BaseTextureCache[t._pixiId]=e),e}},function(t,e){Tiny.TextureCache={},Tiny.FrameCache={},Tiny.TextureSilentFail=!1,Tiny.TextureCacheIdGenerator=0,Tiny.Texture=function(t,e,i,n){this.noFrame=!1,e||(this.noFrame=!0,e=new Tiny.Rectangle(0,0,1,1)),t instanceof Tiny.Texture&&(t=t.baseTexture),this.baseTexture=t,this.frame=e,this.trim=n,this.valid=!1,this.width=0,this.height=0,this.crop=i||new Tiny.Rectangle(0,0,1,1),t.hasLoaded&&(this.noFrame&&(e=new Tiny.Rectangle(0,0,t.width,t.height)),this.setFrame(e))},Tiny.Texture.prototype.constructor=Tiny.Texture,Tiny.Texture.prototype.onBaseTextureLoaded=function(){var t=this.baseTexture;this.noFrame&&(this.frame=new Tiny.Rectangle(0,0,t.width,t.height)),this.setFrame(this.frame)},Tiny.Texture.prototype.destroy=function(t){t&&this.baseTexture.destroy(),this.valid=!1},Tiny.Texture.prototype.setFrame=function(t){if(this.noFrame=!1,this.frame=t,this.width=t.width,this.height=t.height,this.crop.x=t.x,this.crop.y=t.y,this.crop.width=t.width,this.crop.height=t.height,!this.trim&&(t.x+t.width>this.baseTexture.width||t.y+t.height>this.baseTexture.height)){if(Tiny.TextureSilentFail)return void(this.valid=!1);throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this)}this.valid=t&&t.width&&t.height&&this.baseTexture.source&&this.baseTexture.hasLoaded,this.trim&&(this.width=this.trim.width,this.height=this.trim.height,this.frame.width=this.trim.width,this.frame.height=this.trim.height)},Tiny.Texture.fromImage=function(t,e,i){var n=Tiny.TextureCache[t];return n||((n=new Tiny.Texture(Tiny.BaseTexture.fromImage(t,e,i))).key=t,Tiny.TextureCache[t]=n),n},Tiny.Texture.fromFrame=function(t){var e=Tiny.TextureCache[t];if(e)return e;throw new Error('The frameId "'+t+'" does not exist in the texture cache ')},Tiny.Texture.fromCanvas=function(t){t=Tiny.BaseTexture.fromCanvas(t);return new Tiny.Texture(t)},Tiny.Texture.addTextureToCache=function(t,e){Tiny.TextureCache[e]=t},Tiny.Texture.removeTextureFromCache=function(t){var e=Tiny.TextureCache[t];return delete Tiny.TextureCache[t],delete Tiny.BaseTextureCache[t],e}},function(t,e){Tiny.Sprite=function(t,e){Tiny.DisplayObjectContainer.call(this),this.anchor=new Tiny.Point,this.setTexture(t,e,!1),this._width=0,this._height=0,this._frame=0,this.tint=16777215,this.blendMode="source-over",this.shader=null,this.texture.baseTexture.hasLoaded&&this.onTextureUpdate(),this.renderable=!0},Tiny.Sprite.prototype=Object.create(Tiny.DisplayObjectContainer.prototype),Tiny.Sprite.prototype.constructor=Tiny.Sprite,Object.defineProperty(Tiny.Sprite.prototype,"frameName",{get:function(){return this.texture.frame.name},set:function(t){this.texture.frame.name&&this.setTexture(Tiny.TextureCache[this.texture.key+"_"+t])}}),Object.defineProperty(Tiny.Sprite.prototype,"frame",{get:function(){return this._frame},set:function(t){this.texture.max_no_frame&&(this._frame=t,this._frame>this.texture.max_no_frame&&(this._frame=0),this.setTexture(Tiny.TextureCache[this.texture.key+"_"+this._frame]))}}),Object.defineProperty(Tiny.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(t){this.scale.x=t/this.texture.frame.width,this._width=t}}),Object.defineProperty(Tiny.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(t){this.scale.y=t/this.texture.frame.height,this._height=t}}),Tiny.Sprite.prototype.setTexture=function(t,e,i){if("string"==typeof t){var n=t;if(null!=e&&(n=n+"_"+e),!(t=Tiny.TextureCache[n]))throw new Error("Cache Error: image "+n+" does`t found in cache")}return this.texture!==t&&(this.texture=t,this.cachedTint=16777215,!0===i&&this.onTextureUpdate(),!0)},Tiny.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height)},Tiny.Sprite.prototype.animate=function(t){var e;this.texture.max_no_frame&&null!=this.texture.frame.index&&(e=t||this.texture.frame.duration||100,this.animation?this.animation.delay=e:this.animation=this.game.timer.loop(e,function(){this.frame+=1,this.animation.delay=t||this.texture.frame.duration||100}.bind(this)),this.animation.start())},Tiny.Sprite.prototype.getBounds=function(t){var e,i,n,r=this.texture.frame.width,s=this.texture.frame.height,h=r*(1-this.anchor.x),r=r*-this.anchor.x,o=s*(1-this.anchor.y),s=s*-this.anchor.y,t=t||this.worldTransform,a=t.a,c=t.b,l=t.c,u=t.d,d=t.tx,t=t.ty,y=-1/0,p=-1/0,T=1/0,f=1/0,p=0===c&&0===l?(a<0&&(a*=-1),u<0&&(u*=-1),T=a*r+d,y=a*h+d,f=u*s+t,u*o+t):(T=(n=a*r+l*o+d)<(T=(i=a*h+l*o+d)<(T=(e=a*h+l*s+d)<(T=(a=a*r+l*s+d)<T?a:T)?e:T)?i:T)?n:T,f=(l=u*o+c*r+t)<(f=(d=u*o+c*h+t)<(f=(o=u*s+c*h+t)<(f=(h=u*s+c*r+t)<f?h:f)?o:f)?d:f)?l:f,y=(y=(y=(y=y<a?a:y)<e?e:y)<i?i:y)<n?n:y,(p=(p=(p=p<h?h:p)<o?o:p)<d?d:p)<l?l:p),u=this._bounds;return u.x=T,u.width=y-T,u.y=f,u.height=p-f,this._currentBounds=u},Tiny.Sprite.prototype._renderCanvas=function(t){if(!(!1===this.visible||0===this.alpha||!1===this.renderable||this.texture.crop.width<=0||this.texture.crop.height<=0)){var e,i,n;this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,t.context.globalCompositeOperation=t.currentBlendMode),this._mask&&t.maskManager.pushMask(this._mask,t),this.texture.valid&&(e=this.texture.baseTexture.resolution/t.resolution,t.context.globalAlpha=this.worldAlpha,i=this.texture.trim?this.texture.trim.x-this.anchor.x*this.texture.trim.width:this.anchor.x*-this.texture.frame.width,n=this.texture.trim?this.texture.trim.y-this.anchor.y*this.texture.trim.height:this.anchor.y*-this.texture.frame.height,t.roundPixels?(t.context.setTransform(this.worldTransform.a,this.worldTransform.b,this.worldTransform.c,this.worldTransform.d,this.worldTransform.tx*t.resolution|0,this.worldTransform.ty*t.resolution|0),i|=0,n|=0):t.context.setTransform(this.worldTransform.a,this.worldTransform.b,this.worldTransform.c,this.worldTransform.d,this.worldTransform.tx*t.resolution,this.worldTransform.ty*t.resolution),16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=Tiny.CanvasTinter.getTintedTexture(this,this.tint)),t.context.drawImage(this.tintedTexture,0,0,this.texture.crop.width,this.texture.crop.height,i/e,n/e,this.texture.crop.width/e,this.texture.crop.height/e)):t.context.drawImage(this.texture.baseTexture.source,this.texture.crop.x,this.texture.crop.y,this.texture.crop.width,this.texture.crop.height,i/e,n/e,this.texture.crop.width/e,this.texture.crop.height/e));for(var r=0;r<this.children.length;r++)this.children[r]._renderCanvas(t);this._mask&&t.maskManager.popMask(t)}}},function(t,e){Tiny.Text=function(t,e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=1,Tiny.Sprite.call(this,Tiny.Texture.fromCanvas(this.canvas)),this.setText(t),this.setStyle(e)},Tiny.Text.prototype=Object.create(Tiny.Sprite.prototype),Tiny.Text.prototype.constructor=Tiny.Text,Object.defineProperty(Tiny.Text.prototype,"width",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.x*this.texture.frame.width},set:function(t){this.scale.x=t/this.texture.frame.width,this._width=t}}),Object.defineProperty(Tiny.Text.prototype,"height",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.y*this.texture.frame.height},set:function(t){this.scale.y=t/this.texture.frame.height,this._height=t}}),Tiny.Text.prototype.setStyle=function(t){(t=t||{}).font=t.font||"bold 20pt Arial",t.fill=t.fill||"black",t.align=t.align||"left",t.stroke=t.stroke||"black",t.strokeThickness=t.strokeThickness||0,t.wordWrap=t.wordWrap||!1,t.lineSpacing=t.lineSpacing||0,t.wordWrapWidth=void 0!==t.wordWrapWidth?t.wordWrapWidth:100,t.dropShadow=t.dropShadow||!1,t.dropShadowAngle=void 0!==t.dropShadowAngle?t.dropShadowAngle:Math.PI/6,t.dropShadowDistance=void 0!==t.dropShadowDistance?t.dropShadowDistance:4,t.dropShadowColor=t.dropShadowColor||"black",this.style=t,this.dirty=!0},Tiny.Text.prototype.setText=function(t){this.text=t.toString()||" ",this.dirty=!0},Tiny.Text.prototype.updateText=function(){this.texture.baseTexture.resolution=this.resolution,this.context.font=this.style.font;for(var t=this.text,e=(t=this.style.wordWrap?this.wordWrap(this.text):t).split(/(?:\r\n|\r|\n)/),i=[],n=0,r=this.determineFontProperties(this.style.font),s=0;s<e.length;s++){var h=this.context.measureText(e[s]).width;i[s]=h,n=Math.max(n,h)}var o,a,t=n+this.style.strokeThickness,c=(this.style.dropShadow&&(t+=this.style.dropShadowDistance),this.canvas.width=(t+this.context.lineWidth)*this.resolution,r.fontSize+this.style.strokeThickness+this.style.lineSpacing),t=c*e.length;if(this.style.dropShadow&&(t+=this.style.dropShadowDistance),this.canvas.height=(t-this.style.lineSpacing)*this.resolution,this.context.scale(this.resolution,this.resolution),navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.textBaseline="alphabetic",this.context.miterLimit=2,this.style.dropShadow){this.context.fillStyle=this.style.dropShadowColor;for(var l=Math.sin(this.style.dropShadowAngle)*this.style.dropShadowDistance,u=Math.cos(this.style.dropShadowAngle)*this.style.dropShadowDistance,s=0;s<e.length;s++)o=this.style.strokeThickness/2,a=this.style.strokeThickness/2+s*c+r.ascent,"right"===this.style.align?o+=n-i[s]:"center"===this.style.align&&(o+=(n-i[s])/2),this.style.fill&&this.context.fillText(e[s],o+l,a+u)}for(this.context.fillStyle=this.style.fill,s=0;s<e.length;s++)o=this.style.strokeThickness/2,a=this.style.strokeThickness/2+s*c+r.ascent,"right"===this.style.align?o+=n-i[s]:"center"===this.style.align&&(o+=(n-i[s])/2),this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(e[s],o,a),this.style.fill&&this.context.fillText(e[s],o,a);this.updateTexture()},Tiny.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width,this.texture.baseTexture.height=this.canvas.height,this.texture.crop.width=this.texture.frame.width=this.canvas.width,this.texture.crop.height=this.texture.frame.height=this.canvas.height,this._width=this.canvas.width,this._height=this.canvas.height},Tiny.Text.prototype._renderCanvas=function(t){this.dirty&&(this.resolution=t.resolution,this.updateText(),this.dirty=!1),Tiny.Sprite.prototype._renderCanvas.call(this,t)},Tiny.Text.prototype.determineFontProperties=function(t){if(!(i=Tiny.Text.fontPropertiesCache[t])){for(var e,i={},n=Tiny.Text.fontPropertiesCanvas,r=Tiny.Text.fontPropertiesContext,s=(r.font=t,Math.ceil(r.measureText("|MÉq").width)),h=2*(o=Math.ceil(r.measureText("|MÉq").width)),o=1.4*o|0,a=(n.width=s,n.height=h,r.fillStyle="#f00",r.fillRect(0,0,s,h),r.font=t,r.textBaseline="alphabetic",r.fillStyle="#000",r.fillText("|MÉq",0,o),r.getImageData(0,0,s,h).data),n=a.length,c=4*s,l=0,u=!1,d=0;d<o;d++){for(e=0;e<c;e+=4)if(255!==a[l+e]){u=!0;break}if(u)break;l+=c}for(i.ascent=o-d,l=n-c,u=!1,d=h;o<d;d--){for(e=0;e<c;e+=4)if(255!==a[l+e]){u=!0;break}if(u)break;l-=c}i.descent=d-o,i.descent+=6,i.fontSize=i.ascent+i.descent,Tiny.Text.fontPropertiesCache[t]=i}return i},Tiny.Text.prototype.wordWrap=function(t){for(var e="",i=t.split("\n"),n=0;n<i.length;n++){for(var r=this.style.wordWrapWidth,s=i[n].split(" "),h=0;h<s.length;h++){var o=this.context.measureText(s[h]).width,a=o+this.context.measureText(" ").width;0===h||r<a?(0<h&&(e+="\n"),e+=s[h],r=this.style.wordWrapWidth-o):(r-=a,e+=" "+s[h])}n<i.length-1&&(e+="\n")}return e},Tiny.Text.prototype.getBounds=function(t){return this.dirty&&(this.updateText(),this.dirty=!1),Tiny.Sprite.prototype.getBounds.call(this,t)},Tiny.Text.prototype.destroy=function(t){this.context=null,this.canvas=null,this.texture.destroy(void 0===t||t)},Tiny.Text.fontPropertiesCache={},Tiny.Text.fontPropertiesCanvas=document.createElement("canvas"),Tiny.Text.fontPropertiesContext=Tiny.Text.fontPropertiesCanvas.getContext("2d")}]);