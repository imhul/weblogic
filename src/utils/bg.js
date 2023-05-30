class bgJS {
    constructor(e, a) {
        var t = document.querySelector(
            '#' + e + ' > .bg-app-canvas-el'
        );
        this.bgJS = {
            canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
            parts: {
                number: {
                    value: 400,
                    density: { enable: !0, value_area: 800 }
                },
                color: { value: '#fff' },
                shape: {
                    type: 'circle',
                    stroke: { width: 0, color: '#ff0000' },
                    polygon: { nb_sides: 5 },
                    image: { src: '', width: 100, height: 100 }
                },
                opacity: {
                    value: 1,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 2,
                        opacity_min: 0,
                        sync: !1
                    }
                },
                size: {
                    value: 20,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 20,
                        size_min: 0,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 100,
                    color: '#fff',
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: 'none',
                    random: !1,
                    straight: !1,
                    out_mode: 'out',
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 3e3,
                        rotateY: 3e3
                    }
                },
                array: []
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: !0, mode: 'grab' },
                    onclick: { enable: !0, mode: 'push' },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: { opacity: 1 }
                    },
                    bubble: {
                        distance: 200,
                        size: 80,
                        duration: 0.4
                    },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                },
                mouse: {}
            },
            retina_detect: !1,
            fn: { interact: {}, modes: {}, vendors: {} },
            tmp: {}
        };
        var i = this.bgJS;
        a && Object.deepExtend(i, a),
            (i.tmp.obj = {
                size_value: i.parts.size.value,
                size_anim_speed: i.parts.size.anim.speed,
                move_speed: i.parts.move.speed,
                line_linked_distance: i.parts.line_linked.distance,
                line_linked_width: i.parts.line_linked.width,
                mode_grab_distance:
                    i.interactivity.modes.grab.distance,
                mode_bubble_distance:
                    i.interactivity.modes.bubble.distance,
                mode_bubble_size: i.interactivity.modes.bubble.size,
                mode_repulse_distance:
                    i.interactivity.modes.repulse.distance
            }),
            (i.fn.retinaInit = function () {
                i.retina_detect && window.devicePixelRatio > 1
                    ? ((i.canvas.pxratio = window.devicePixelRatio),
                      (i.tmp.retina = !0))
                    : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
                    (i.canvas.w =
                        i.canvas.el.offsetWidth * i.canvas.pxratio),
                    (i.canvas.h =
                        i.canvas.el.offsetHeight * i.canvas.pxratio),
                    (i.parts.size.value =
                        i.tmp.obj.size_value * i.canvas.pxratio),
                    (i.parts.size.anim.speed =
                        i.tmp.obj.size_anim_speed * i.canvas.pxratio),
                    (i.parts.move.speed =
                        i.tmp.obj.move_speed * i.canvas.pxratio),
                    (i.parts.line_linked.distance =
                        i.tmp.obj.line_linked_distance *
                        i.canvas.pxratio),
                    (i.interactivity.modes.grab.distance =
                        i.tmp.obj.mode_grab_distance *
                        i.canvas.pxratio),
                    (i.interactivity.modes.bubble.distance =
                        i.tmp.obj.mode_bubble_distance *
                        i.canvas.pxratio),
                    (i.parts.line_linked.width =
                        i.tmp.obj.line_linked_width *
                        i.canvas.pxratio),
                    (i.interactivity.modes.bubble.size =
                        i.tmp.obj.mode_bubble_size *
                        i.canvas.pxratio),
                    (i.interactivity.modes.repulse.distance =
                        i.tmp.obj.mode_repulse_distance *
                        i.canvas.pxratio);
            }),
            (i.fn.canvasInit = function () {
                i.canvas.ctx = i.canvas.el.getContext('2d');
            }),
            (i.fn.canvasSize = function () {
                (i.canvas.el.width = i.canvas.w),
                    (i.canvas.el.height = i.canvas.h),
                    i &&
                        i.interactivity.events.resize &&
                        window.addEventListener(
                            'resize',
                            function () {
                                (i.canvas.w =
                                    i.canvas.el.offsetWidth),
                                    (i.canvas.h =
                                        i.canvas.el.offsetHeight),
                                    i.tmp.retina &&
                                        ((i.canvas.w *=
                                            i.canvas.pxratio),
                                        (i.canvas.h *=
                                            i.canvas.pxratio)),
                                    (i.canvas.el.width = i.canvas.w),
                                    (i.canvas.el.height = i.canvas.h),
                                    i.parts.move.enable ||
                                        (i.fn.particlesEmpty(),
                                        i.fn.particlesCreate(),
                                        i.fn.particlesDraw(),
                                        i.fn.vendors.densityAutoParticles()),
                                    i.fn.vendors.densityAutoParticles();
                            }
                        );
            }),
            (i.fn.canvasPaint = function () {
                i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
            }),
            (i.fn.canvasClear = function () {
                i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
            }),
            (i.fn.particle = function (e, a, t) {
                if (
                    ((this.radius =
                        (i.parts.size.random ? Math.random() : 1) *
                        i.parts.size.value),
                    i.parts.size.anim.enable &&
                        ((this.size_status = !1),
                        (this.vs = i.parts.size.anim.speed / 100),
                        i.parts.size.anim.sync ||
                            (this.vs = this.vs * Math.random())),
                    (this.x = t ? t.x : Math.random() * i.canvas.w),
                    (this.y = t ? t.y : Math.random() * i.canvas.h),
                    this.x > i.canvas.w - 2 * this.radius
                        ? (this.x = this.x - this.radius)
                        : this.x < 2 * this.radius &&
                          (this.x = this.x + this.radius),
                    this.y > i.canvas.h - 2 * this.radius
                        ? (this.y = this.y - this.radius)
                        : this.y < 2 * this.radius &&
                          (this.y = this.y + this.radius),
                    i.parts.move.bounce &&
                        i.fn.vendors.checkOverlap(this, t),
                    (this.color = {}),
                    'object' == typeof e.value)
                )
                    if (e.value instanceof Array) {
                        var n =
                            e.value[
                                Math.floor(
                                    Math.random() *
                                        i.parts.color.value.length
                                )
                            ];
                        this.color.rgb = hexToRgb(n);
                    } else
                        null != e.value.r &&
                            null != e.value.g &&
                            null != e.value.b &&
                            (this.color.rgb = {
                                r: e.value.r,
                                g: e.value.g,
                                b: e.value.b
                            }),
                            null != e.value.h &&
                                null != e.value.s &&
                                null != e.value.l &&
                                (this.color.hsl = {
                                    h: e.value.h,
                                    s: e.value.s,
                                    l: e.value.l
                                });
                else
                    'random' == e.value
                        ? (this.color.rgb = {
                              r: Math.floor(256 * Math.random()) + 0,
                              g: Math.floor(256 * Math.random()) + 0,
                              b: Math.floor(256 * Math.random()) + 0
                          })
                        : 'string' == typeof e.value &&
                          ((this.color = e),
                          (this.color.rgb = hexToRgb(
                              this.color.value
                          )));
                (this.opacity =
                    (i.parts.opacity.random ? Math.random() : 1) *
                    i.parts.opacity.value),
                    i.parts.opacity.anim.enable &&
                        ((this.opacity_status = !1),
                        (this.vo = i.parts.opacity.anim.speed / 100),
                        i.parts.opacity.anim.sync ||
                            (this.vo = this.vo * Math.random()));
                var s = {};
                switch (i.parts.move.direction) {
                    case 'top':
                        s = { x: 0, y: -1 };
                        break;
                    case 'top-right':
                        s = { x: 0.5, y: -0.5 };
                        break;
                    case 'right':
                        s = { x: 1, y: -0 };
                        break;
                    case 'bottom-right':
                        s = { x: 0.5, y: 0.5 };
                        break;
                    case 'bottom':
                        s = { x: 0, y: 1 };
                        break;
                    case 'bottom-left':
                        s = { x: -0.5, y: 1 };
                        break;
                    case 'left':
                        s = { x: -1, y: 0 };
                        break;
                    case 'top-left':
                        s = { x: -0.5, y: -0.5 };
                        break;
                    default:
                        s = { x: 0, y: 0 };
                }
                i.parts.move.straight
                    ? ((this.vx = s.x),
                      (this.vy = s.y),
                      i.parts.move.random &&
                          ((this.vx = this.vx * Math.random()),
                          (this.vy = this.vy * Math.random())))
                    : ((this.vx = s.x + Math.random() - 0.5),
                      (this.vy = s.y + Math.random() - 0.5)),
                    (this.vx_i = this.vx),
                    (this.vy_i = this.vy);
                var r = i.parts.shape.type;
                if ('object' == typeof r) {
                    if (r instanceof Array) {
                        var o =
                            r[Math.floor(Math.random() * r.length)];
                        this.shape = o;
                    }
                } else this.shape = r;
                if ('image' == this.shape) {
                    var c = i.parts.shape;
                    (this.img = {
                        src: c.image.src,
                        ratio: c.image.width / c.image.height
                    }),
                        this.img.ratio || (this.img.ratio = 1),
                        'svg' == i.tmp.img_type &&
                            null != i.tmp.source_svg &&
                            (i.fn.vendors.createSvgImg(this),
                            i.tmp.pushing && (this.img.loaded = !1));
                }
            }),
            (i.fn.particle.prototype.draw = function () {
                var e = this;
                if (null != e.radius_bubble) var a = e.radius_bubble;
                else a = e.radius;
                if (null != e.opacity_bubble)
                    var t = e.opacity_bubble;
                else t = e.opacity;
                if (e.color.rgb)
                    var n =
                        'rgba(' +
                        e.color.rgb.r +
                        ',' +
                        e.color.rgb.g +
                        ',' +
                        e.color.rgb.b +
                        ',' +
                        t +
                        ')';
                else
                    n =
                        'hsla(' +
                        e.color.hsl.h +
                        ',' +
                        e.color.hsl.s +
                        '%,' +
                        e.color.hsl.l +
                        '%,' +
                        t +
                        ')';
                switch (
                    ((i.canvas.ctx.fillStyle = n),
                    i.canvas.ctx.beginPath(),
                    e.shape)
                ) {
                    case 'circle':
                        i.canvas.ctx.arc(
                            e.x,
                            e.y,
                            a,
                            0,
                            2 * Math.PI,
                            !1
                        );
                        break;
                    case 'edge':
                        i.canvas.ctx.rect(
                            e.x - a,
                            e.y - a,
                            2 * a,
                            2 * a
                        );
                        break;
                    case 'triangle':
                        i.fn.vendors.drawShape(
                            i.canvas.ctx,
                            e.x - a,
                            e.y + a / 1.66,
                            2 * a,
                            3,
                            2
                        );
                        break;
                    case 'polygon':
                        i.fn.vendors.drawShape(
                            i.canvas.ctx,
                            e.x -
                                a /
                                    (i.parts.shape.polygon.nb_sides /
                                        3.5),
                            e.y - a / 0.76,
                            (2.66 * a) /
                                (i.parts.shape.polygon.nb_sides / 3),
                            i.parts.shape.polygon.nb_sides,
                            1
                        );
                        break;
                    case 'star':
                        i.fn.vendors.drawShape(
                            i.canvas.ctx,
                            e.x -
                                (2 * a) /
                                    (i.parts.shape.polygon.nb_sides /
                                        4),
                            e.y - a / 1.52,
                            (2 * a * 2.66) /
                                (i.parts.shape.polygon.nb_sides / 3),
                            i.parts.shape.polygon.nb_sides,
                            2
                        );
                        break;
                    case 'image':
                        if ('svg' == i.tmp.img_type)
                            var s = e.img.obj;
                        else s = i.tmp.img_obj;
                        s &&
                            i.canvas.ctx.drawImage(
                                s,
                                e.x - a,
                                e.y - a,
                                2 * a,
                                (2 * a) / e.img.ratio
                            );
                }
                i.canvas.ctx.closePath(),
                    i.parts.shape.stroke.width > 0 &&
                        ((i.canvas.ctx.strokeStyle =
                            i.parts.shape.stroke.color),
                        (i.canvas.ctx.lineWidth =
                            i.parts.shape.stroke.width),
                        i.canvas.ctx.stroke()),
                    i.canvas.ctx.fill();
            }),
            (i.fn.particlesCreate = function () {
                for (var e = 0; e < i.parts.number.value; e++)
                    i.parts.array.push(
                        new i.fn.particle(
                            i.parts.color,
                            i.parts.opacity.value
                        )
                    );
            }),
            (i.fn.particlesUpdate = function () {
                for (var e = 0; e < i.parts.array.length; e++) {
                    var a = i.parts.array[e];
                    if (i.parts.move.enable) {
                        var t = i.parts.move.speed / 2;
                        (a.x += a.vx * t), (a.y += a.vy * t);
                    }
                    if (
                        (i.parts.opacity.anim.enable &&
                            (1 == a.opacity_status
                                ? (a.opacity >=
                                      i.parts.opacity.value &&
                                      (a.opacity_status = !1),
                                  (a.opacity += a.vo))
                                : (a.opacity <=
                                      i.parts.opacity.anim
                                          .opacity_min &&
                                      (a.opacity_status = !0),
                                  (a.opacity -= a.vo)),
                            a.opacity < 0 && (a.opacity = 0)),
                        i.parts.size.anim.enable &&
                            (1 == a.size_status
                                ? (a.radius >= i.parts.size.value &&
                                      (a.size_status = !1),
                                  (a.radius += a.vs))
                                : (a.radius <=
                                      i.parts.size.anim.size_min &&
                                      (a.size_status = !0),
                                  (a.radius -= a.vs)),
                            a.radius < 0 && (a.radius = 0)),
                        'bounce' == i.parts.move.out_mode)
                    )
                        var n = {
                            x_left: a.radius,
                            x_right: i.canvas.w,
                            y_top: a.radius,
                            y_bottom: i.canvas.h
                        };
                    else
                        n = {
                            x_left: -a.radius,
                            x_right: i.canvas.w + a.radius,
                            y_top: -a.radius,
                            y_bottom: i.canvas.h + a.radius
                        };
                    if (
                        (a.x - a.radius > i.canvas.w
                            ? ((a.x = n.x_left),
                              (a.y = Math.random() * i.canvas.h))
                            : a.x + a.radius < 0 &&
                              ((a.x = n.x_right),
                              (a.y = Math.random() * i.canvas.h)),
                        a.y - a.radius > i.canvas.h
                            ? ((a.y = n.y_top),
                              (a.x = Math.random() * i.canvas.w))
                            : a.y + a.radius < 0 &&
                              ((a.y = n.y_bottom),
                              (a.x = Math.random() * i.canvas.w)),
                        'bounce' === i.parts.move.out_mode)
                    )
                        (a.x + a.radius > i.canvas.w ||
                            a.x - a.radius < 0) &&
                            (a.vx = -a.vx),
                            (a.y + a.radius > i.canvas.h ||
                                a.y - a.radius < 0) &&
                                (a.vy = -a.vy);
                    if (
                        (isInArray(
                            'grab',
                            i.interactivity.events.onhover.mode
                        ) && i.fn.modes.grabParticle(a),
                        (isInArray(
                            'bubble',
                            i.interactivity.events.onhover.mode
                        ) ||
                            isInArray(
                                'bubble',
                                i.interactivity.events.onclick.mode
                            )) &&
                            i.fn.modes.bubbleParticle(a),
                        (isInArray(
                            'repulse',
                            i.interactivity.events.onhover.mode
                        ) ||
                            isInArray(
                                'repulse',
                                i.interactivity.events.onclick.mode
                            )) &&
                            i.fn.modes.repulseParticle(a),
                        i.parts.line_linked.enable ||
                            i.parts.move.attract.enable)
                    )
                        for (
                            var s = e + 1;
                            s < i.parts.array.length;
                            s++
                        ) {
                            var r = i.parts.array[s];
                            i.parts.line_linked.enable &&
                                i.fn.interact.linkParticles(a, r),
                                i.parts.move.attract.enable &&
                                    i.fn.interact.attractParticles(
                                        a,
                                        r
                                    ),
                                i.parts.move.bounce &&
                                    i.fn.interact.bounceParticles(
                                        a,
                                        r
                                    );
                        }
                }
            }),
            (i.fn.particlesDraw = function () {
                i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
                    i.fn.particlesUpdate();
                for (var e = 0; e < i.parts.array.length; e++) {
                    i.parts.array[e].draw();
                }
            }),
            (i.fn.particlesEmpty = function () {
                i.parts.array = [];
            }),
            (i.fn.particlesRefresh = function () {
                cancelRequestAnimFrame(i.fn.checkAnimFrame),
                    cancelRequestAnimFrame(i.fn.drawAnimFrame),
                    (i.tmp.source_svg = void 0),
                    (i.tmp.img_obj = void 0),
                    (i.tmp.count_svg = 0),
                    i.fn.particlesEmpty(),
                    i.fn.canvasClear(),
                    i.fn.vendors.start();
            }),
            (i.fn.interact.linkParticles = function (e, a) {
                var t = e.x - a.x,
                    n = e.y - a.y,
                    s = Math.sqrt(t * t + n * n);
                if (s <= i.parts.line_linked.distance) {
                    var r =
                        i.parts.line_linked.opacity -
                        s /
                            (1 / i.parts.line_linked.opacity) /
                            i.parts.line_linked.distance;
                    if (r > 0) {
                        var o = i.parts.line_linked.color_rgb_line;
                        (i.canvas.ctx.strokeStyle =
                            'rgba(' +
                            o.r +
                            ',' +
                            o.g +
                            ',' +
                            o.b +
                            ',' +
                            r +
                            ')'),
                            (i.canvas.ctx.lineWidth =
                                i.parts.line_linked.width),
                            i.canvas.ctx.beginPath(),
                            i.canvas.ctx.moveTo(e.x, e.y),
                            i.canvas.ctx.lineTo(a.x, a.y),
                            i.canvas.ctx.stroke(),
                            i.canvas.ctx.closePath();
                    }
                }
            }),
            (i.fn.interact.attractParticles = function (e, a) {
                var t = e.x - a.x,
                    n = e.y - a.y;
                if (
                    Math.sqrt(t * t + n * n) <=
                    i.parts.line_linked.distance
                ) {
                    var s = t / (1e3 * i.parts.move.attract.rotateX),
                        r = n / (1e3 * i.parts.move.attract.rotateY);
                    (e.vx -= s),
                        (e.vy -= r),
                        (a.vx += s),
                        (a.vy += r);
                }
            }),
            (i.fn.interact.bounceParticles = function (e, a) {
                var t = e.x - a.x,
                    i = e.y - a.y;
                Math.sqrt(t * t + i * i) <= e.radius + a.radius &&
                    ((e.vx = -e.vx),
                    (e.vy = -e.vy),
                    (a.vx = -a.vx),
                    (a.vy = -a.vy));
            }),
            (i.fn.modes.pushParticles = function (e, a) {
                i.tmp.pushing = !0;
                for (var t = 0; t < e; t++)
                    i.parts.array.push(
                        new i.fn.particle(
                            i.parts.color,
                            i.parts.opacity.value,
                            {
                                x: a
                                    ? a.pos_x
                                    : Math.random() * i.canvas.w,
                                y: a
                                    ? a.pos_y
                                    : Math.random() * i.canvas.h
                            }
                        )
                    ),
                        t == e - 1 &&
                            (i.parts.move.enable ||
                                i.fn.particlesDraw(),
                            (i.tmp.pushing = !1));
            }),
            (i.fn.modes.removeParticles = function (e) {
                i.parts.array.splice(0, e),
                    i.parts.move.enable || i.fn.particlesDraw();
            }),
            (i.fn.modes.bubbleParticle = function (e) {
                if (
                    i.interactivity.events.onhover.enable &&
                    isInArray(
                        'bubble',
                        i.interactivity.events.onhover.mode
                    )
                ) {
                    var a = e.x - i.interactivity.mouse.pos_x,
                        t = e.y - i.interactivity.mouse.pos_y,
                        n =
                            1 -
                            (c = Math.sqrt(a * a + t * t)) /
                                i.interactivity.modes.bubble.distance;
                    function v() {
                        (e.opacity_bubble = e.opacity),
                            (e.radius_bubble = e.radius);
                    }
                    if (c <= i.interactivity.modes.bubble.distance) {
                        if (
                            n >= 0 &&
                            'mousemove' == i.interactivity.status
                        ) {
                            if (
                                i.interactivity.modes.bubble.size !=
                                i.parts.size.value
                            )
                                if (
                                    i.interactivity.modes.bubble
                                        .size > i.parts.size.value
                                ) {
                                    (r =
                                        e.radius +
                                        i.interactivity.modes.bubble
                                            .size *
                                            n) >= 0 &&
                                        (e.radius_bubble = r);
                                } else {
                                    var s =
                                            e.radius -
                                            i.interactivity.modes
                                                .bubble.size,
                                        r = e.radius - s * n;
                                    e.radius_bubble = r > 0 ? r : 0;
                                }
                            var o;
                            if (
                                i.interactivity.modes.bubble
                                    .opacity != i.parts.opacity.value
                            )
                                if (
                                    i.interactivity.modes.bubble
                                        .opacity >
                                    i.parts.opacity.value
                                )
                                    (o =
                                        i.interactivity.modes.bubble
                                            .opacity * n) >
                                        e.opacity &&
                                        o <=
                                            i.interactivity.modes
                                                .bubble.opacity &&
                                        (e.opacity_bubble = o);
                                else
                                    (o =
                                        e.opacity -
                                        (i.parts.opacity.value -
                                            i.interactivity.modes
                                                .bubble.opacity) *
                                            n) < e.opacity &&
                                        o >=
                                            i.interactivity.modes
                                                .bubble.opacity &&
                                        (e.opacity_bubble = o);
                        }
                    } else v();
                    'mouseleave' == i.interactivity.status && v();
                } else if (
                    i.interactivity.events.onclick.enable &&
                    isInArray(
                        'bubble',
                        i.interactivity.events.onclick.mode
                    )
                ) {
                    if (i.tmp.bubble_clicking) {
                        (a = e.x - i.interactivity.mouse.click_pos_x),
                            (t =
                                e.y -
                                i.interactivity.mouse.click_pos_y);
                        var c = Math.sqrt(a * a + t * t),
                            l =
                                (new Date().getTime() -
                                    i.interactivity.mouse
                                        .click_time) /
                                1e3;
                        l > i.interactivity.modes.bubble.duration &&
                            (i.tmp.bubble_duration_end = !0),
                            l >
                                2 *
                                    i.interactivity.modes.bubble
                                        .duration &&
                                ((i.tmp.bubble_clicking = !1),
                                (i.tmp.bubble_duration_end = !1));
                    }
                    function p(a, t, n, s, r) {
                        if (a != t)
                            if (i.tmp.bubble_duration_end)
                                null != n &&
                                    ((v =
                                        a +
                                        (a -
                                            (s -
                                                (l * (s - a)) /
                                                    i.interactivity
                                                        .modes.bubble
                                                        .duration))),
                                    'size' == r &&
                                        (e.radius_bubble = v),
                                    'opacity' == r &&
                                        (e.opacity_bubble = v));
                            else if (
                                c <=
                                i.interactivity.modes.bubble.distance
                            ) {
                                if (null != n) var o = n;
                                else o = s;
                                if (o != a) {
                                    var v =
                                        s -
                                        (l * (s - a)) /
                                            i.interactivity.modes
                                                .bubble.duration;
                                    'size' == r &&
                                        (e.radius_bubble = v),
                                        'opacity' == r &&
                                            (e.opacity_bubble = v);
                                }
                            } else
                                'size' == r &&
                                    (e.radius_bubble = void 0),
                                    'opacity' == r &&
                                        (e.opacity_bubble = void 0);
                    }
                    i.tmp.bubble_clicking &&
                        (p(
                            i.interactivity.modes.bubble.size,
                            i.parts.size.value,
                            e.radius_bubble,
                            e.radius,
                            'size'
                        ),
                        p(
                            i.interactivity.modes.bubble.opacity,
                            i.parts.opacity.value,
                            e.opacity_bubble,
                            e.opacity,
                            'opacity'
                        ));
                }
            }),
            (i.fn.modes.repulseParticle = function (e) {
                if (
                    i.interactivity.events.onhover.enable &&
                    isInArray(
                        'repulse',
                        i.interactivity.events.onhover.mode
                    ) &&
                    'mousemove' == i.interactivity.status
                ) {
                    var a = e.x - i.interactivity.mouse.pos_x,
                        t = e.y - i.interactivity.mouse.pos_y,
                        n = Math.sqrt(a * a + t * t),
                        s = { x: a / n, y: t / n },
                        r = clamp(
                            (1 /
                                (c =
                                    i.interactivity.modes.repulse
                                        .distance)) *
                                (-1 * Math.pow(n / c, 2) + 1) *
                                c *
                                100,
                            0,
                            50
                        ),
                        o = { x: e.x + s.x * r, y: e.y + s.y * r };
                    'bounce' == i.parts.move.out_mode
                        ? (o.x - e.radius > 0 &&
                              o.x + e.radius < i.canvas.w &&
                              (e.x = o.x),
                          o.y - e.radius > 0 &&
                              o.y + e.radius < i.canvas.h &&
                              (e.y = o.y))
                        : ((e.x = o.x), (e.y = o.y));
                } else if (
                    i.interactivity.events.onclick.enable &&
                    isInArray(
                        'repulse',
                        i.interactivity.events.onclick.mode
                    )
                )
                    if (
                        (i.tmp.repulse_finish ||
                            (i.tmp.repulse_count++,
                            i.tmp.repulse_count ==
                                i.parts.array.length &&
                                (i.tmp.repulse_finish = !0)),
                        i.tmp.repulse_clicking)
                    ) {
                        var c = Math.pow(
                                i.interactivity.modes.repulse
                                    .distance / 6,
                                3
                            ),
                            l =
                                i.interactivity.mouse.click_pos_x -
                                e.x,
                            v =
                                i.interactivity.mouse.click_pos_y -
                                e.y,
                            p = l * l + v * v,
                            d = (-c / p) * 1;
                        function m() {
                            var a = Math.atan2(v, l);
                            if (
                                ((e.vx = d * Math.cos(a)),
                                (e.vy = d * Math.sin(a)),
                                'bounce' == i.parts.move.out_mode)
                            ) {
                                var t = {
                                    x: e.x + e.vx,
                                    y: e.y + e.vy
                                };
                                (t.x + e.radius > i.canvas.w ||
                                    t.x - e.radius < 0) &&
                                    (e.vx = -e.vx),
                                    (t.y + e.radius > i.canvas.h ||
                                        t.y - e.radius < 0) &&
                                        (e.vy = -e.vy);
                            }
                        }
                        p <= c && m();
                    } else
                        0 == i.tmp.repulse_clicking &&
                            ((e.vx = e.vx_i), (e.vy = e.vy_i));
            }),
            (i.fn.modes.grabParticle = function (e) {
                if (
                    i.interactivity.events.onhover.enable &&
                    'mousemove' == i.interactivity.status
                ) {
                    var a = e.x - i.interactivity.mouse.pos_x,
                        t = e.y - i.interactivity.mouse.pos_y,
                        n = Math.sqrt(a * a + t * t);
                    if (n <= i.interactivity.modes.grab.distance) {
                        var s =
                            i.interactivity.modes.grab.line_linked
                                .opacity -
                            n /
                                (1 /
                                    i.interactivity.modes.grab
                                        .line_linked.opacity) /
                                i.interactivity.modes.grab.distance;
                        if (s > 0) {
                            var r =
                                i.parts.line_linked.color_rgb_line;
                            (i.canvas.ctx.strokeStyle =
                                'rgba(' +
                                r.r +
                                ',' +
                                r.g +
                                ',' +
                                r.b +
                                ',' +
                                s +
                                ')'),
                                (i.canvas.ctx.lineWidth =
                                    i.parts.line_linked.width),
                                i.canvas.ctx.beginPath(),
                                i.canvas.ctx.moveTo(e.x, e.y),
                                i.canvas.ctx.lineTo(
                                    i.interactivity.mouse.pos_x,
                                    i.interactivity.mouse.pos_y
                                ),
                                i.canvas.ctx.stroke(),
                                i.canvas.ctx.closePath();
                        }
                    }
                }
            }),
            (i.fn.vendors.eventsListeners = function () {
                'window' == i.interactivity.detect_on
                    ? (i.interactivity.el = window)
                    : (i.interactivity.el = i.canvas.el),
                    (i.interactivity.events.onhover.enable ||
                        i.interactivity.events.onclick.enable) &&
                        (i.interactivity.el.addEventListener(
                            'mousemove',
                            function (e) {
                                if (i.interactivity.el == window)
                                    var a = e.clientX,
                                        t = e.clientY;
                                else
                                    (a = e.offsetX || e.clientX),
                                        (t = e.offsetY || e.clientY);
                                (i.interactivity.mouse.pos_x = a),
                                    (i.interactivity.mouse.pos_y = t),
                                    i.tmp.retina &&
                                        ((i.interactivity.mouse.pos_x *=
                                            i.canvas.pxratio),
                                        (i.interactivity.mouse.pos_y *=
                                            i.canvas.pxratio)),
                                    (i.interactivity.status =
                                        'mousemove');
                            }
                        ),
                        i.interactivity.el.addEventListener(
                            'mouseleave',
                            function (e) {
                                (i.interactivity.mouse.pos_x = null),
                                    (i.interactivity.mouse.pos_y =
                                        null),
                                    (i.interactivity.status =
                                        'mouseleave');
                            }
                        )),
                    i.interactivity.events.onclick.enable &&
                        i.interactivity.el.addEventListener(
                            'click',
                            function () {
                                if (
                                    ((i.interactivity.mouse.click_pos_x =
                                        i.interactivity.mouse.pos_x),
                                    (i.interactivity.mouse.click_pos_y =
                                        i.interactivity.mouse.pos_y),
                                    (i.interactivity.mouse.click_time =
                                        new Date().getTime()),
                                    i.interactivity.events.onclick
                                        .enable)
                                )
                                    switch (
                                        i.interactivity.events.onclick
                                            .mode
                                    ) {
                                        case 'push':
                                            i.parts.move.enable ||
                                            1 ==
                                                i.interactivity.modes
                                                    .push.particles_nb
                                                ? i.fn.modes.pushParticles(
                                                      i.interactivity
                                                          .modes.push
                                                          .particles_nb,
                                                      i.interactivity
                                                          .mouse
                                                  )
                                                : i.interactivity
                                                      .modes.push
                                                      .particles_nb >
                                                      1 &&
                                                  i.fn.modes.pushParticles(
                                                      i.interactivity
                                                          .modes.push
                                                          .particles_nb
                                                  );
                                            break;
                                        case 'remove':
                                            i.fn.modes.removeParticles(
                                                i.interactivity.modes
                                                    .remove
                                                    .particles_nb
                                            );
                                            break;
                                        case 'bubble':
                                            i.tmp.bubble_clicking =
                                                !0;
                                            break;
                                        case 'repulse':
                                            (i.tmp.repulse_clicking =
                                                !0),
                                                (i.tmp.repulse_count = 0),
                                                (i.tmp.repulse_finish =
                                                    !1),
                                                setTimeout(
                                                    function () {
                                                        i.tmp.repulse_clicking =
                                                            !1;
                                                    },
                                                    1e3 *
                                                        i
                                                            .interactivity
                                                            .modes
                                                            .repulse
                                                            .duration
                                                );
                                    }
                            }
                        );
            }),
            (i.fn.vendors.densityAutoParticles = function () {
                if (i.parts.number.density.enable) {
                    var e =
                        (i.canvas.el.width * i.canvas.el.height) /
                        1e3;
                    i.tmp.retina && (e /= 2 * i.canvas.pxratio);
                    var a =
                            (e * i.parts.number.value) /
                            i.parts.number.density.value_area,
                        t = i.parts.array.length - a;
                    t < 0
                        ? i.fn.modes.pushParticles(Math.abs(t))
                        : i.fn.modes.removeParticles(t);
                }
            }),
            (i.fn.vendors.checkOverlap = function (e, a) {
                for (var t = 0; t < i.parts.array.length; t++) {
                    var n = i.parts.array[t],
                        s = e.x - n.x,
                        r = e.y - n.y;
                    Math.sqrt(s * s + r * r) <= e.radius + n.radius &&
                        ((e.x = a ? a.x : Math.random() * i.canvas.w),
                        (e.y = a ? a.y : Math.random() * i.canvas.h),
                        i.fn.vendors.checkOverlap(e));
                }
            }),
            (i.fn.vendors.createSvgImg = function (e) {
                var a = i.tmp.source_svg.replace(
                        /#([0-9A-F]{3,6})/gi,
                        function (a, t, i, n) {
                            if (e.color.rgb)
                                var s =
                                    'rgba(' +
                                    e.color.rgb.r +
                                    ',' +
                                    e.color.rgb.g +
                                    ',' +
                                    e.color.rgb.b +
                                    ',' +
                                    e.opacity +
                                    ')';
                            else
                                s =
                                    'hsla(' +
                                    e.color.hsl.h +
                                    ',' +
                                    e.color.hsl.s +
                                    '%,' +
                                    e.color.hsl.l +
                                    '%,' +
                                    e.opacity +
                                    ')';
                            return s;
                        }
                    ),
                    t = new Blob([a], {
                        type: 'image/svg+xml;charset=utf-8'
                    }),
                    n = window.URL || window.webkitURL || window,
                    s = n.createObjectURL(t),
                    r = new Image();
                r.addEventListener('load', function () {
                    (e.img.obj = r),
                        (e.img.loaded = !0),
                        n.revokeObjectURL(s),
                        i.tmp.count_svg++;
                }),
                    (r.src = s);
            }),
            (i.fn.vendors.destroypJS = function () {
                cancelAnimationFrame(i.fn.drawAnimFrame),
                    t.remove(),
                    (bgJSDom = null);
            }),
            (i.fn.vendors.drawShape = function (e, a, t, i, n, s) {
                var r = n * s,
                    o = n / s,
                    c = (180 * (o - 2)) / o,
                    l = Math.PI - (Math.PI * c) / 180;
                e.save(),
                    e.beginPath(),
                    e.translate(a, t),
                    e.moveTo(0, 0);
                for (var v = 0; v < r; v++)
                    e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
                e.fill(), e.restore();
            }),
            (i.fn.vendors.exportImg = function () {
                window.open(
                    i.canvas.el.toDataURL('image/png'),
                    '_blank'
                );
            }),
            (i.fn.vendors.loadImg = function (e) {
                if (
                    ((i.tmp.img_error = void 0),
                    '' != i.parts.shape.image.src)
                )
                    if ('svg' == e) {
                        var a = new XMLHttpRequest();
                        a.open('GET', i.parts.shape.image.src),
                            (a.onreadystatechange = function (e) {
                                4 == a.readyState &&
                                    (200 == a.status
                                        ? ((i.tmp.source_svg =
                                              e.currentTarget.response),
                                          i.fn.vendors.checkBeforeDraw())
                                        : (console.log(
                                              'Error bgJS - Image not found'
                                          ),
                                          (i.tmp.img_error = !0)));
                            }),
                            a.send();
                    } else {
                        var t = new Image();
                        t.addEventListener('load', function () {
                            (i.tmp.img_obj = t),
                                i.fn.vendors.checkBeforeDraw();
                        }),
                            (t.src = i.parts.shape.image.src);
                    }
                else
                    console.log('Error bgJS - No image.src'),
                        (i.tmp.img_error = !0);
            }),
            (i.fn.vendors.draw = function () {
                'image' == i.parts.shape.type
                    ? 'svg' == i.tmp.img_type
                        ? i.tmp.count_svg >= i.parts.number.value
                            ? (i.fn.particlesDraw(),
                              i.parts.move.enable
                                  ? (i.fn.drawAnimFrame =
                                        requestAnimFrame(
                                            i.fn.vendors.draw
                                        ))
                                  : cancelRequestAnimFrame(
                                        i.fn.drawAnimFrame
                                    ))
                            : i.tmp.img_error ||
                              (i.fn.drawAnimFrame = requestAnimFrame(
                                  i.fn.vendors.draw
                              ))
                        : null != i.tmp.img_obj
                        ? (i.fn.particlesDraw(),
                          i.parts.move.enable
                              ? (i.fn.drawAnimFrame =
                                    requestAnimFrame(
                                        i.fn.vendors.draw
                                    ))
                              : cancelRequestAnimFrame(
                                    i.fn.drawAnimFrame
                                ))
                        : i.tmp.img_error ||
                          (i.fn.drawAnimFrame = requestAnimFrame(
                              i.fn.vendors.draw
                          ))
                    : (i.fn.particlesDraw(),
                      i.parts.move.enable
                          ? (i.fn.drawAnimFrame = requestAnimFrame(
                                i.fn.vendors.draw
                            ))
                          : cancelRequestAnimFrame(
                                i.fn.drawAnimFrame
                            ));
            }),
            (i.fn.vendors.checkBeforeDraw = function () {
                'image' == i.parts.shape.type
                    ? 'svg' == i.tmp.img_type &&
                      null == i.tmp.source_svg
                        ? (i.tmp.checkAnimFrame =
                              requestAnimFrame(check))
                        : (cancelRequestAnimFrame(
                              i.tmp.checkAnimFrame
                          ),
                          i.tmp.img_error ||
                              (i.fn.vendors.init(),
                              i.fn.vendors.draw()))
                    : (i.fn.vendors.init(), i.fn.vendors.draw());
            }),
            (i.fn.vendors.init = function () {
                i.fn.retinaInit(),
                    i.fn.canvasInit(),
                    i.fn.canvasSize(),
                    i.fn.canvasPaint(),
                    i.fn.particlesCreate(),
                    i.fn.vendors.densityAutoParticles(),
                    (i.parts.line_linked.color_rgb_line = hexToRgb(
                        i.parts.line_linked.color
                    ));
            }),
            (i.fn.vendors.start = function () {
                isInArray('image', i.parts.shape.type)
                    ? ((i.tmp.img_type =
                          i.parts.shape.image.src.substr(
                              i.parts.shape.image.src.length - 3
                          )),
                      i.fn.vendors.loadImg(i.tmp.img_type))
                    : i.fn.vendors.checkBeforeDraw();
            }),
            i.fn.vendors.eventsListeners(),
            i.fn.vendors.start();
    }
}
function hexToRgb(e) {
    e = e.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        function (e, a, t, i) {
            return a + a + t + t + i + i;
        }
    );
    var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return a
        ? {
              r: parseInt(a[1], 16),
              g: parseInt(a[2], 16),
              b: parseInt(a[3], 16)
          }
        : null;
}
function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
    return a.indexOf(e) > -1;
}
(Object.deepExtend = function (e, a) {
    return (
        (function e(a, t) {
            for (var i in t)
                t[i] &&
                t[i].constructor &&
                t[i].constructor === Object
                    ? ((a[i] = a[i] || {}), e(a[i], t[i]))
                    : (a[i] = t[i]);
        })(e, a),
        e
    );
}),
    (window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e) {
            window.setTimeout(e, 1e3 / 60);
        }),
    (window.cancelRequestAnimFrame =
        window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout),
    (window.bgJSDom = []),
    (window.backgroundJS = class {
        constructor(e, a) {
            'string' != typeof e && ((a = e), (e = 'bg-app')),
                e || (e = 'bg-app');
            const t = document.getElementById(e),
                i = 'bg-app-canvas-el',
                n = t.getElementsByClassName(i);
            if (n.length) for (; n.length > 0; ) t.removeChild(n[0]);
            const s = document.createElement('canvas');
            (s.className = i),
                (s.style.width = '100%'),
                (s.style.height = '100%');
            null != document.getElementById(e).appendChild(s) &&
                bgJSDom.push(new bgJS(e, a));
        }
        static load(e, a, t) {
            const i = new XMLHttpRequest();
            i.open('GET', a),
                (i.onreadystatechange = function (a) {
                    if (4 == i.readyState)
                        if (200 == i.status) {
                            var n = JSON.parse(
                                a.currentTarget.response
                            );
                            window.backgroundJS(e, n), t && t();
                        } else
                            console.log(
                                'Error bgJS - XMLHttpRequest status: ' +
                                    i.status
                            ),
                                console.log(
                                    'Error bgJS - File config not found'
                                );
                }),
                i.send();
        }
    }),
    new backgroundJS('bg-app', {
        parts: {
            number: {
                value: 80,
                density: { enable: !0, value_area: 800 }
            },
            color: { value: '#fdd835' },
            shape: {
                type: 'circle',
                stroke: { width: 0, color: '#fdd835' },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: !1
                }
            },
            size: {
                value: 5,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: 0.1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: '#cfd8dc',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 6,
                direction: 'none',
                random: !1,
                straight: !1,
                out_mode: 'out',
                attract: { enable: !1, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: !0, mode: 'repulse' },
                onclick: { enable: !0, mode: 'push' },
                resize: !0
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: { distance: 200 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: !0
    });
