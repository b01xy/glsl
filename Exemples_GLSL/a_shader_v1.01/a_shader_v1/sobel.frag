uniform sampler2DRect image;

varying vec2 texcoord00;
varying vec2 texcoord02;
varying vec2 texcoord20;
varying vec2 texcoord22;

void main()
{
	vec4 s1 = texture2DRect(image, texcoord00);
	vec4 s2 = texture2DRect(image, texcoord02);
	vec4 s3 = texture2DRect(image, texcoord20);
	vec4 s4 = texture2DRect(image, texcoord22);

	vec4 sx = 4.0 * ((s4 + s3) - (s2 + s1));
	vec4 sy = 4.0 * ((s2 + s4) - (s1 + s3));

	vec4 sobel = sqrt(sx*sx + sy*sy);

	gl_FragColor = sobel;
}