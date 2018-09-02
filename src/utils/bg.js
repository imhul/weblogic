var bgJS = function(tag_id, params){

    var canvas_el = document.querySelector('#'+tag_id+' > .bg-app-canvas-el');

  this.bgJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    parts: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var bgJS = this.bgJS;

  /* params settings */
  if(params){
    Object.deepExtend(bgJS, params);
  }

  bgJS.tmp.obj = {
    size_value: bgJS.parts.size.value,
    size_anim_speed: bgJS.parts.size.anim.speed,
    move_speed: bgJS.parts.move.speed,
    line_linked_distance: bgJS.parts.line_linked.distance,
    line_linked_width: bgJS.parts.line_linked.width,
    mode_grab_distance: bgJS.interactivity.modes.grab.distance,
    mode_bubble_distance: bgJS.interactivity.modes.bubble.distance,
    mode_bubble_size: bgJS.interactivity.modes.bubble.size,
    mode_repulse_distance: bgJS.interactivity.modes.repulse.distance
  };


  bgJS.fn.retinaInit = function(){

    if(bgJS.retina_detect && window.devicePixelRatio > 1){
      bgJS.canvas.pxratio = window.devicePixelRatio; 
      bgJS.tmp.retina = true;
    } 
    else{
      bgJS.canvas.pxratio = 1;
      bgJS.tmp.retina = false;
    }

    bgJS.canvas.w = bgJS.canvas.el.offsetWidth * bgJS.canvas.pxratio;
    bgJS.canvas.h = bgJS.canvas.el.offsetHeight * bgJS.canvas.pxratio;

    bgJS.parts.size.value = bgJS.tmp.obj.size_value * bgJS.canvas.pxratio;
    bgJS.parts.size.anim.speed = bgJS.tmp.obj.size_anim_speed * bgJS.canvas.pxratio;
    bgJS.parts.move.speed = bgJS.tmp.obj.move_speed * bgJS.canvas.pxratio;
    bgJS.parts.line_linked.distance = bgJS.tmp.obj.line_linked_distance * bgJS.canvas.pxratio;
    bgJS.interactivity.modes.grab.distance = bgJS.tmp.obj.mode_grab_distance * bgJS.canvas.pxratio;
    bgJS.interactivity.modes.bubble.distance = bgJS.tmp.obj.mode_bubble_distance * bgJS.canvas.pxratio;
    bgJS.parts.line_linked.width = bgJS.tmp.obj.line_linked_width * bgJS.canvas.pxratio;
    bgJS.interactivity.modes.bubble.size = bgJS.tmp.obj.mode_bubble_size * bgJS.canvas.pxratio;
    bgJS.interactivity.modes.repulse.distance = bgJS.tmp.obj.mode_repulse_distance * bgJS.canvas.pxratio;

  };



  /* ---------- bgJS functions - canvas ------------ */

  bgJS.fn.canvasInit = function(){
    bgJS.canvas.ctx = bgJS.canvas.el.getContext('2d');
  };

  bgJS.fn.canvasSize = function(){

    bgJS.canvas.el.width = bgJS.canvas.w;
    bgJS.canvas.el.height = bgJS.canvas.h;

    if(bgJS && bgJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          bgJS.canvas.w = bgJS.canvas.el.offsetWidth;
          bgJS.canvas.h = bgJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(bgJS.tmp.retina){
            bgJS.canvas.w *= bgJS.canvas.pxratio;
            bgJS.canvas.h *= bgJS.canvas.pxratio;
          }

          bgJS.canvas.el.width = bgJS.canvas.w;
          bgJS.canvas.el.height = bgJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!bgJS.parts.move.enable){
            bgJS.fn.particlesEmpty();
            bgJS.fn.particlesCreate();
            bgJS.fn.particlesDraw();
            bgJS.fn.vendors.densityAutoParticles();
          }

        /* density parts enabled */
        bgJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  bgJS.fn.canvasPaint = function(){
    bgJS.canvas.ctx.fillRect(0, 0, bgJS.canvas.w, bgJS.canvas.h);
  };

  bgJS.fn.canvasClear = function(){
    bgJS.canvas.ctx.clearRect(0, 0, bgJS.canvas.w, bgJS.canvas.h);
  };


  /* --------- bgJS functions - parts ----------- */

  bgJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (bgJS.parts.size.random ? Math.random() : 1) * bgJS.parts.size.value;
    if(bgJS.parts.size.anim.enable){
      this.size_status = false;
      this.vs = bgJS.parts.size.anim.speed / 100;
      if(!bgJS.parts.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * bgJS.canvas.w;
    this.y = position ? position.y : Math.random() * bgJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > bgJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > bgJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(bgJS.parts.move.bounce){
      bgJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * bgJS.parts.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (bgJS.parts.opacity.random ? Math.random() : 1) * bgJS.parts.opacity.value;
    if(bgJS.parts.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = bgJS.parts.opacity.anim.speed / 100;
      if(!bgJS.parts.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(bgJS.parts.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(bgJS.parts.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(bgJS.parts.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    var shape_type = bgJS.parts.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = bgJS.parts.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(bgJS.tmp.img_type == 'svg' && bgJS.tmp.source_svg != undefined){
        bgJS.fn.vendors.createSvgImg(this);
        if(bgJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }
  };

  bgJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    bgJS.canvas.ctx.fillStyle = color_value;
    bgJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        bgJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        bgJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        bgJS.fn.vendors.drawShape(bgJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        bgJS.fn.vendors.drawShape(
          bgJS.canvas.ctx,
          p.x - radius / (bgJS.parts.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (bgJS.parts.shape.polygon.nb_sides/3), // sideLength
          bgJS.parts.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        bgJS.fn.vendors.drawShape(
          bgJS.canvas.ctx,
          p.x - radius*2 / (bgJS.parts.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (bgJS.parts.shape.polygon.nb_sides/3), // sideLength
          bgJS.parts.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          bgJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(bgJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = bgJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    bgJS.canvas.ctx.closePath();

    if(bgJS.parts.shape.stroke.width > 0){
      bgJS.canvas.ctx.strokeStyle = bgJS.parts.shape.stroke.color;
      bgJS.canvas.ctx.lineWidth = bgJS.parts.shape.stroke.width;
      bgJS.canvas.ctx.stroke();
    }
    
    bgJS.canvas.ctx.fill();
    
  };


  bgJS.fn.particlesCreate = function(){
    for(var i = 0; i < bgJS.parts.number.value; i++) {
      bgJS.parts.array.push(new bgJS.fn.particle(bgJS.parts.color, bgJS.parts.opacity.value));
    }
  };

  bgJS.fn.particlesUpdate = function(){

    for(var i = 0; i < bgJS.parts.array.length; i++){

      /* the particle */
      var p = bgJS.parts.array[i];

      /* move the particle */
      if(bgJS.parts.move.enable){
        var ms = bgJS.parts.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(bgJS.parts.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= bgJS.parts.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= bgJS.parts.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(bgJS.parts.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= bgJS.parts.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= bgJS.parts.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(bgJS.parts.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  bgJS.canvas.w,
          y_top: p.radius,
          y_bottom: bgJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: bgJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: bgJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > bgJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * bgJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * bgJS.canvas.h;
      }
      if(p.y - p.radius > bgJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * bgJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * bgJS.canvas.w;
      }

      /* out of canvas modes */
      switch(bgJS.parts.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > bgJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > bgJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', bgJS.interactivity.events.onhover.mode)){
        bgJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', bgJS.interactivity.events.onhover.mode) || isInArray('bubble', bgJS.interactivity.events.onclick.mode)){
        bgJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', bgJS.interactivity.events.onhover.mode) || isInArray('repulse', bgJS.interactivity.events.onclick.mode)){
        bgJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between parts */
      if(bgJS.parts.line_linked.enable || bgJS.parts.move.attract.enable){
        for(var j = i + 1; j < bgJS.parts.array.length; j++){
          var p2 = bgJS.parts.array[j];

          /* link parts */
          if(bgJS.parts.line_linked.enable){
            bgJS.fn.interact.linkParticles(p,p2);
          }

          /* attract parts */
          if(bgJS.parts.move.attract.enable){
            bgJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce parts */
          if(bgJS.parts.move.bounce){
            bgJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  bgJS.fn.particlesDraw = function(){

    /* clear canvas */
    bgJS.canvas.ctx.clearRect(0, 0, bgJS.canvas.w, bgJS.canvas.h);

    /* update each parts param */
    bgJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < bgJS.parts.array.length; i++){
      var p = bgJS.parts.array[i];
      p.draw();
    }

  };

  bgJS.fn.particlesEmpty = function(){
    bgJS.parts.array = [];
  };

  bgJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(bgJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(bgJS.fn.drawAnimFrame);
    bgJS.tmp.source_svg = undefined;
    bgJS.tmp.img_obj = undefined;
    bgJS.tmp.count_svg = 0;
    bgJS.fn.particlesEmpty();
    bgJS.fn.canvasClear();
    
    /* restart */
    bgJS.fn.vendors.start();

  };


  /* ---------- bgJS functions - parts interaction ------------ */

  bgJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= bgJS.parts.line_linked.distance){

      var opacity_line = bgJS.parts.line_linked.opacity - (dist / (1/bgJS.parts.line_linked.opacity)) / bgJS.parts.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = bgJS.parts.line_linked.color_rgb_line;
        bgJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        bgJS.canvas.ctx.lineWidth = bgJS.parts.line_linked.width;
        //bgJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        bgJS.canvas.ctx.beginPath();
        bgJS.canvas.ctx.moveTo(p1.x, p1.y);
        bgJS.canvas.ctx.lineTo(p2.x, p2.y);
        bgJS.canvas.ctx.stroke();
        bgJS.canvas.ctx.closePath();

      }

    }

  };


  bgJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed parts */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= bgJS.parts.line_linked.distance){

      var ax = dx/(bgJS.parts.move.attract.rotateX*1000),
          ay = dy/(bgJS.parts.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  bgJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- bgJS functions - modes events ------------ */

  bgJS.fn.modes.pushParticles = function(nb, pos){

    bgJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      bgJS.parts.array.push(
        new bgJS.fn.particle(
          bgJS.parts.color,
          bgJS.parts.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * bgJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * bgJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!bgJS.parts.move.enable){
          bgJS.fn.particlesDraw();
        }
        bgJS.tmp.pushing = false;
      }
    }

  };


  bgJS.fn.modes.removeParticles = function(nb){

    bgJS.parts.array.splice(0, nb);
    if(!bgJS.parts.move.enable){
      bgJS.fn.particlesDraw();
    }

  };


  bgJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(bgJS.interactivity.events.onhover.enable && isInArray('bubble', bgJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - bgJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - bgJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / bgJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= bgJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && bgJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(bgJS.interactivity.modes.bubble.size != bgJS.parts.size.value){

            if(bgJS.interactivity.modes.bubble.size > bgJS.parts.size.value){
              var size = p.radius + (bgJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - bgJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(bgJS.interactivity.modes.bubble.opacity != bgJS.parts.opacity.value){

            if(bgJS.interactivity.modes.bubble.opacity > bgJS.parts.opacity.value){
              var opacity = bgJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= bgJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (bgJS.parts.opacity.value-bgJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= bgJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }
          }
        }

      }else{
        init();
      }

      /* mouseleave */
      if(bgJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(bgJS.interactivity.events.onclick.enable && isInArray('bubble', bgJS.interactivity.events.onclick.mode)){


      if(bgJS.tmp.bubble_clicking){
        var dx_mouse = p.x - bgJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - bgJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - bgJS.interactivity.mouse.click_time)/1000;

        if(time_spent > bgJS.interactivity.modes.bubble.duration){
          bgJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > bgJS.interactivity.modes.bubble.duration*2){
          bgJS.tmp.bubble_clicking = false;
          bgJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!bgJS.tmp.bubble_duration_end){
            if(dist_mouse <= bgJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / bgJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / bgJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(bgJS.tmp.bubble_clicking){
        /* size */
        process(bgJS.interactivity.modes.bubble.size, bgJS.parts.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(bgJS.interactivity.modes.bubble.opacity, bgJS.parts.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  bgJS.fn.modes.repulseParticle = function(p){

    if(bgJS.interactivity.events.onhover.enable && isInArray('repulse', bgJS.interactivity.events.onhover.mode) && bgJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - bgJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - bgJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = bgJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(bgJS.parts.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < bgJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < bgJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(bgJS.interactivity.events.onclick.enable && isInArray('repulse', bgJS.interactivity.events.onclick.mode)) {

      if(!bgJS.tmp.repulse_finish){
        bgJS.tmp.repulse_count++;
        if(bgJS.tmp.repulse_count == bgJS.parts.array.length){
          bgJS.tmp.repulse_finish = true;
        }
      }

      if(bgJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(bgJS.interactivity.modes.repulse.distance/6, 3);

        var dx = bgJS.interactivity.mouse.click_pos_x - p.x,
            dy = bgJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(bgJS.parts.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > bgJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > bgJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

      }else{

        if(bgJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  bgJS.fn.modes.grabParticle = function(p){

    if(bgJS.interactivity.events.onhover.enable && bgJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - bgJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - bgJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= bgJS.interactivity.modes.grab.distance){

        var opacity_line = bgJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/bgJS.interactivity.modes.grab.line_linked.opacity)) / bgJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = bgJS.parts.line_linked.color_rgb_line;
          bgJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          bgJS.canvas.ctx.lineWidth = bgJS.parts.line_linked.width;
          //bgJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          bgJS.canvas.ctx.beginPath();
          bgJS.canvas.ctx.moveTo(p.x, p.y);
          bgJS.canvas.ctx.lineTo(bgJS.interactivity.mouse.pos_x, bgJS.interactivity.mouse.pos_y);
          bgJS.canvas.ctx.stroke();
          bgJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- bgJS functions - vendors ------------ */

  bgJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(bgJS.interactivity.detect_on == 'window'){
      bgJS.interactivity.el = window;
    }else{
      bgJS.interactivity.el = bgJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(bgJS.interactivity.events.onhover.enable || bgJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      bgJS.interactivity.el.addEventListener('mousemove', function(e){

        if(bgJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        bgJS.interactivity.mouse.pos_x = pos_x;
        bgJS.interactivity.mouse.pos_y = pos_y;

        if(bgJS.tmp.retina){
          bgJS.interactivity.mouse.pos_x *= bgJS.canvas.pxratio;
          bgJS.interactivity.mouse.pos_y *= bgJS.canvas.pxratio;
        }

        bgJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      bgJS.interactivity.el.addEventListener('mouseleave', function(e){

        bgJS.interactivity.mouse.pos_x = null;
        bgJS.interactivity.mouse.pos_y = null;
        bgJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(bgJS.interactivity.events.onclick.enable){

      bgJS.interactivity.el.addEventListener('click', function(){

        bgJS.interactivity.mouse.click_pos_x = bgJS.interactivity.mouse.pos_x;
        bgJS.interactivity.mouse.click_pos_y = bgJS.interactivity.mouse.pos_y;
        bgJS.interactivity.mouse.click_time = new Date().getTime();

        if(bgJS.interactivity.events.onclick.enable){

          switch(bgJS.interactivity.events.onclick.mode){

            case 'push':
              if(bgJS.parts.move.enable){
                bgJS.fn.modes.pushParticles(bgJS.interactivity.modes.push.particles_nb, bgJS.interactivity.mouse);
              }else{
                if(bgJS.interactivity.modes.push.particles_nb == 1){
                  bgJS.fn.modes.pushParticles(bgJS.interactivity.modes.push.particles_nb, bgJS.interactivity.mouse);
                }
                else if(bgJS.interactivity.modes.push.particles_nb > 1){
                  bgJS.fn.modes.pushParticles(bgJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              bgJS.fn.modes.removeParticles(bgJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              bgJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              bgJS.tmp.repulse_clicking = true;
              bgJS.tmp.repulse_count = 0;
              bgJS.tmp.repulse_finish = false;
              setTimeout(function(){
                bgJS.tmp.repulse_clicking = false;
              }, bgJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  bgJS.fn.vendors.densityAutoParticles = function(){

    if(bgJS.parts.number.density.enable){

      /* calc area */
      var area = bgJS.canvas.el.width * bgJS.canvas.el.height / 1000;
      if(bgJS.tmp.retina){
        area = area/(bgJS.canvas.pxratio*2);
      }

      /* calc number of parts based on density area */
      var nb_particles = area * bgJS.parts.number.value / bgJS.parts.number.density.value_area;

      /* add or remove X parts */
      var missing_particles = bgJS.parts.array.length - nb_particles;
      if(missing_particles < 0) bgJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else bgJS.fn.modes.removeParticles(missing_particles);

    }

  };


  bgJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < bgJS.parts.array.length; i++){
      var p2 = bgJS.parts.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * bgJS.canvas.w;
        p1.y = position ? position.y : Math.random() * bgJS.canvas.h;
        bgJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  bgJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = bgJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      bgJS.tmp.count_svg++;
    });
    img.src = url;

  };


  bgJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(bgJS.fn.drawAnimFrame);
    canvas_el.remove();
    bgJSDom = null;
  };


  bgJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  bgJS.fn.vendors.exportImg = function(){
    window.open(bgJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  bgJS.fn.vendors.loadImg = function(type){

    bgJS.tmp.img_error = undefined;

    if(bgJS.parts.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', bgJS.parts.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              bgJS.tmp.source_svg = data.currentTarget.response;
              bgJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error bgJS - Image not found');
              bgJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          bgJS.tmp.img_obj = img;
          bgJS.fn.vendors.checkBeforeDraw();
        });
        img.src = bgJS.parts.shape.image.src;

      }

    }else{
      console.log('Error bgJS - No image.src');
      bgJS.tmp.img_error = true;
    }

  };


  bgJS.fn.vendors.draw = function(){

    if(bgJS.parts.shape.type == 'image'){

      if(bgJS.tmp.img_type == 'svg'){

        if(bgJS.tmp.count_svg >= bgJS.parts.number.value){
          bgJS.fn.particlesDraw();
          if(!bgJS.parts.move.enable) cancelRequestAnimFrame(bgJS.fn.drawAnimFrame);
          else bgJS.fn.drawAnimFrame = requestAnimFrame(bgJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!bgJS.tmp.img_error) bgJS.fn.drawAnimFrame = requestAnimFrame(bgJS.fn.vendors.draw);
        }

      }else{

        if(bgJS.tmp.img_obj != undefined){
          bgJS.fn.particlesDraw();
          if(!bgJS.parts.move.enable) cancelRequestAnimFrame(bgJS.fn.drawAnimFrame);
          else bgJS.fn.drawAnimFrame = requestAnimFrame(bgJS.fn.vendors.draw);
        }else{
          if(!bgJS.tmp.img_error) bgJS.fn.drawAnimFrame = requestAnimFrame(bgJS.fn.vendors.draw);
        }

      }

    }else{
      bgJS.fn.particlesDraw();
      if(!bgJS.parts.move.enable) cancelRequestAnimFrame(bgJS.fn.drawAnimFrame);
      else bgJS.fn.drawAnimFrame = requestAnimFrame(bgJS.fn.vendors.draw);
    }

  };


  bgJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(bgJS.parts.shape.type == 'image'){

      if(bgJS.tmp.img_type == 'svg' && bgJS.tmp.source_svg == undefined){
        bgJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(bgJS.tmp.checkAnimFrame);
        if(!bgJS.tmp.img_error){
          bgJS.fn.vendors.init();
          bgJS.fn.vendors.draw();
        }
        
      }

    }else{
      bgJS.fn.vendors.init();
      bgJS.fn.vendors.draw();
    }

  };


  bgJS.fn.vendors.init = function(){

    /* init canvas + parts */
    bgJS.fn.retinaInit();
    bgJS.fn.canvasInit();
    bgJS.fn.canvasSize();
    bgJS.fn.canvasPaint();
    bgJS.fn.particlesCreate();
    bgJS.fn.vendors.densityAutoParticles();

    /* parts.line_linked - convert hex colors to rgb */
    bgJS.parts.line_linked.color_rgb_line = hexToRgb(bgJS.parts.line_linked.color);

  };


  bgJS.fn.vendors.start = function(){

    if(isInArray('image', bgJS.parts.shape.type)){
      bgJS.tmp.img_type = bgJS.parts.shape.image.src.substr(bgJS.parts.shape.image.src.length - 3);
      bgJS.fn.vendors.loadImg(bgJS.tmp.img_type);
    }else{
      bgJS.fn.vendors.checkBeforeDraw();
    }

  };

  /* ---------- bgJS - start ------------ */


  bgJS.fn.vendors.eventsListeners();

  bgJS.fn.vendors.start();

};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- parts.js functions - start ------------ */

window.bgJSDom = [];

window.backgroundJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'bg-app';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'bg-app';
  }

  /* bgJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'bg-app-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the bgJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    bgJSDom.push(new bgJS(tag_id, params));
  }

};

window.backgroundJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.backgroundJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error bgJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error bgJS - File config not found');
      }
    }
  };
  xhr.send();

};

// App --------------------------------------------------------------------

backgroundJS('bg-app',

  {
    "parts": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#cfd8dc"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#cfd8dc",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#ff4400",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// Stats ------------------------------------------------------------------

var Stats = function () {

	var startTime = Date.now(), prevTime = startTime;
	var ms = 0, msMin = Infinity, msMax = 0;
	var fps = 0, fpsMin = Infinity, fpsMax = 0;
	var frames = 0, mode = 0;

	var container = document.createElement( 'div' );
	container.id = 'stats';

	var fpsDiv = document.createElement( 'div' );
	fpsDiv.id = 'fps';
	container.appendChild( fpsDiv );

	var fpsDesc = document.createElement( 'div' );
    fpsDesc.id = 'fpsDesc';
    fpsDesc.textContent = "fps";
    fpsDiv.appendChild( fpsDesc );
    
    var fpsText = document.createElement( 'div' );
	fpsText.id = 'fpsText';
	fpsDiv.appendChild( fpsText );

	var setMode = function() {
		fpsDiv.style.display = 'block';
	};

	var updateGraph = function ( dom, value ) {
		var child = dom.appendChild( dom.firstChild );
		child.style.height = value + 'px';
	};

	return {

		REVISION: 12,

		domElement: container,

		setMode: setMode,

		begin: function () {

			startTime = Date.now();

		},

		end: function () {

			var time = Date.now();

			ms = time - startTime;
			msMin = Math.min( msMin, ms );
			msMax = Math.max( msMax, ms );

			frames ++;

			if ( time > prevTime + 1000 ) {

				fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
				fpsMin = Math.min( fpsMin, fps );
				fpsMax = Math.max( fpsMax, fps );

				fpsText.textContent = fps;

				prevTime = time;
				frames = 0;

			}

			return time;

		},

		update: function () {

			startTime = this.end();

		}

	}

};

function updateAll() {
    let count_parts, stats, update;
    const containerMain = document.querySelector('.count-parts');
    const partsDesc = document.createElement( 'div' );
    const counterLeft = document.getElementById('data-counters');
    const counterRight = document.getElementById('stats');

    if( window.location.pathname === '/folio' && counterLeft && counterRight ) {
        console.log("remove counters by window.location.pathname", window.location.pathname);
        counterLeft.remove();
        counterRight.remove();
        containerMain.remove();
    } else {
        stats = new Stats;
        stats.setMode(0);
        document.body.appendChild(stats.domElement);
        count_parts = document.querySelector('.js-count-parts');
        partsDesc.id = 'partsDesc';
        partsDesc.innerHTML = 'parts';
        containerMain.appendChild( partsDesc );
    }

    update = function() {
        if(stats) {
            stats.begin();
            stats.end();
            if (window.bgJSDom[0].bgJS.parts && window.bgJSDom[0].bgJS.parts.array) {
                count_parts.innerText = window.bgJSDom[0].bgJS.parts.array.length;
            }
            requestAnimationFrame(update);
        }
    };
    requestAnimationFrame(update);

    window.addEventListener('click', (e) => {
        const target = e.target.className;
        if( target === "mobile-fix heading-hero" ) {
            console.log("remove counters by click");
            counterLeft.remove();
            counterRight.remove();
        } else {
            console.log("some one else click");
        }
    });
}

document.addEventListener("DOMContentLoaded", updateAll());

if( window.location.pathname === '/folio') updateAll();



