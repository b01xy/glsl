

uniform sampler2DRect image;

varying vec2 texcoord11;
varying vec2 texcoord00;
varying vec2 texcoord02;
varying vec2 texcoord20;
varying vec2 texcoord22;

void main()
{
	vec4 blur;
	
	blur = texture2DRect(image, texcoord11);
	blur += texture2DRect(image, texcoord00);
	blur += texture2DRect(image, texcoord02);
	blur += texture2DRect(image, texcoord20);
	blur += texture2DRect(image, texcoord22);

	gl_FragColor = 0.2 * blur;
}
