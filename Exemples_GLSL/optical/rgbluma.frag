varying vec2 texcoord0;

// samplers
uniform sampler2DRect tex0;

const vec4 lumcoeff = vec4(0.299,0.587,0.114,0.);

// entry point
void main()
{   
	vec4 a = texture2DRect(tex0, texcoord0);
	float luma = dot(a,lumcoeff);
	gl_FragColor = vec4(luma);
}
