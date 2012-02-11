// Andrew Benson - andrewb@cycling74.com
// Copyright 2009
#extension GL_ARB_texture_rectangle : enable
//setup for 2 texture
varying vec2 texcoord0;
varying vec2 texcoord1;
varying vec2 texdim0;
varying vec2 texdim1;
uniform vec2 amt;
uniform vec4 scale;
uniform vec4 bias;
uniform vec2 boundmode;
uniform sampler2DRect tex0;
uniform sampler2DRect tex1;


void main()
{
    vec4 look = texture2DRect(tex1,texcoord1);//sample repos texture
    vec2 offs = vec2(look.y-look.x,look.w-look.z)*amt;
    vec2 coord = offs+texcoord0;//relative coordinates
    //coord = mod(coord,texdim0);
    vec4 repos = texture2DRect(tex0, coord);
    
    // output texture
    gl_FragColor = repos*scale+bias;
}