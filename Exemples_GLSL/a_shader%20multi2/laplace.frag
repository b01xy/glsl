

uniform sampler2DRect image;
uniform vec4 offset;

varying vec2 texcoord01;
varying vec2 texcoord10;
varying vec2 texcoord11;
varying vec2 texcoord12;
varying vec2 texcoord21;

void main()
{
	vec4 f01 = texture2DRect(image, texcoord01);
	vec4 f10 = texture2DRect(image, texcoord10);
	vec4 f11 = texture2DRect(image, texcoord11);
	vec4 f12 = texture2DRect(image, texcoord12);
	vec4 f21 = texture2DRect(image, texcoord21);

	vec4 laplace = 4.0 * f11 - f01 - f10 - f12 - f21;

	gl_FragColor = laplace + offset;
}
