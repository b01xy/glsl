uniform float width;
uniform float height;

varying vec2 texcoord00;
varying vec2 texcoord02;
varying vec2 texcoord20;
varying vec2 texcoord22;

void main()
{
	// perform standard transform on vertex
	gl_Position = ftransform();

	// transform texcoord	
	vec2 texcoord = vec2(gl_TextureMatrix[0] * gl_MultiTexCoord0);

	// get texcoords
	texcoord00 = texcoord + vec2(-height, -width);
	texcoord20 = texcoord + vec2( height, -width);
	texcoord22 = texcoord + vec2( height,  width);
	texcoord02 = texcoord + vec2(-height,  width);
}