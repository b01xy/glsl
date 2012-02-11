#extension GL_ARB_texture_rectangle : enable
//Andrew Benson - andrewb@cycling74.com
//2009

// texcoords
varying vec2 texcoord0;
varying vec2 texcoord1;

// samplers
uniform sampler2DRect tex0;
uniform sampler2DRect tex1;

//variables
uniform vec2 scale;
uniform vec2 offset;
uniform float lambda;
const vec4 lumcoeff = vec4(0.299,0.587,0.114,0.);

// entry point
void main()
{   
	vec4 a = texture2DRect(tex0, texcoord0);
	vec4 b = texture2DRect(tex1, texcoord1);
	vec2 x1 = vec2(offset.x,0.);
	vec2 y1 = vec2(0.,offset.y);

	//get the difference
	vec4 curdif = b-a;
	
	//calculate the gradient
	vec4 gradx = texture2DRect(tex1, texcoord1+x1)-texture2DRect(tex1, texcoord1-x1);
	gradx += texture2DRect(tex0, texcoord0+x1)-texture2DRect(tex0, texcoord0-x1);
	vec4 grady = texture2DRect(tex1, texcoord1+y1)-texture2DRect(tex1, texcoord1-y1);
	grady += texture2DRect(tex0, texcoord0+y1)-texture2DRect(tex0, texcoord0-y1);
	vec4 gradmag = sqrt((gradx*gradx)+(grady*grady)+vec4(lambda));

	vec4 vx = curdif*(gradx/gradmag);
	float vxd = vx.r;//assumes greyscale
	//format output for flowrepos, out(-x,+x,-y,+y)
	vec2 xout = vec2(max(vxd,0.),abs(min(vxd,0.)))*scale.x;

	vec4 vy = curdif*(grady/gradmag);
	float vyd = vy.r;//assumes greyscale
	//format output for flowrepos, out(-x,+x,-y,+y)
	vec2 yout = vec2(max(vyd,0.),abs(min(vyd,0.)))*scale.y;
	
	gl_FragColor = vec4(xout.xy,yout.xy);
}
