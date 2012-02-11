#extension GL_ARB_texture_rectangle : enable

varying vec2 texcoord0;
varying vec2 texcoord1;
varying vec2 texcoord2;

uniform sampler2DRect tex0;


void main (void) 
{ 
	vec4 sample0 = texture2DRect(tex0, texcoord0);
	vec4 sample1 = texture2DRect(tex0, texcoord1);
	vec4 sample2 = texture2DRect(tex0, texcoord2);

	gl_FragColor =  (sample0 + sample1 + sample2) / (3.0);
} 

