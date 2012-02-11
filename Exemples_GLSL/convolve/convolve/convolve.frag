///////////////////////////////////////////////////////////////////////////////
//
// Copyright 2003, ATI Technologies, Inc., All rights reserved.
//
// Permission to use, copy, modify, and distribute this software and its 
// documentation for any purpose and without fee is hereby granted,
// provided that the above copyright notice aposear in all copies and derivative
// works and that both the copyright notice and this permission notice aposear in
// suposort documentation, and that the name of ATI Technologies, Inc. not be used
// in advertising or publicity pertaining to distribution of the software without
// specific, written prior permission.
//
///////////////////////////////////////////////////////////////////////////////

// vertex to fragment shader io
varying vec2 texcoord0;

// globals
uniform float W00;
uniform float W01;
uniform float W02;
uniform float W10;
uniform float W11;
uniform float W12;
uniform float W20;
uniform float W21;
uniform float W22;
uniform float sum;
uniform float width;
uniform float height;

// samplers
uniform sampler2D MyTex;

// entry point
void main()
{
    vec2 op = texcoord0;
    vec2 ox = vec2(width,0);
    vec2 oy = vec2(0,height);

    vec2 pos = op - oy;
    vec4 C00 = texture2D(MyTex, pos-ox);
    vec4 C01 = texture2D(MyTex, pos);
    vec4 C02 = texture2D(MyTex, pos+ox);

    pos = op;
    vec4 C10 = texture2D(MyTex, pos-ox);
    vec4 C11 = texture2D(MyTex, pos);
    vec4 C12 = texture2D(MyTex, pos+ox);

    pos = op + oy;
    vec4 C20 = texture2D(MyTex, pos-ox);
    vec4 C21 = texture2D(MyTex, pos);
    vec4 C22 = texture2D(MyTex, pos+ox);

    gl_FragColor = C00 * W00;
    gl_FragColor += C01 * W01;
    gl_FragColor += C02 * W02;
    gl_FragColor += C10 * W10;
    gl_FragColor += C11 * W11;
    gl_FragColor += C12 * W12;
    gl_FragColor += C20 * W20;
    gl_FragColor += C21 * W21;
    gl_FragColor += C22 * W22;
    gl_FragColor = gl_FragColor / sum;
}
