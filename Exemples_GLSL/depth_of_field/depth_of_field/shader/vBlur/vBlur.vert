varying vec2 texcoord0;
varying vec2 texcoord1;
varying vec2 texcoord2;

uniform vec2 amount;

void main()
{
    // perform standard transform on vertex
    gl_Position = ftransform();

    // transform texcoords
    texcoord0 = vec2(gl_TextureMatrix[0] * gl_MultiTexCoord0);

	// we use a two pass separable blur kernel, so we go verical/horizontal seperately.
	texcoord1 = texcoord0 + vec2(-amount);
    texcoord2 = texcoord0 + vec2(amount);

}