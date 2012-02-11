// fragments
uniform sampler2D Tex0;

void main() {
// option2
//	vec4 color = texture2D(Tex0, gl_TexCoord[0].st);
//	gl_FragColor = color;
	gl_FragColor = gl_Color;
}




















