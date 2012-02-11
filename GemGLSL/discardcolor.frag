// fragments
uniform sampler2D Tex0;
uniform vec3 colorToDiscard;
uniform float tolerance;

void main() {
	vec4 color = texture2D(Tex0, gl_TexCoord[0].st);
	float distance = distance(color, vec4(colorToDiscard, 1.0));
	if (distance < tolerance) {
		discard;
	}
	gl_FragColor = color;
}
// le gl_TexCoord[0].st prend la texture et s'adapte à la taille du mesh
