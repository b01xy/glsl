// fragments
// uniform sampler2D Tex0;

void main() {
// option2
//	vec4 color = texture2D(Tex0, gl_TexCoord[0].st);
//	gl_FragColor = color;
// tout passer en vert	gl_Color.rb = vec2(0.0,0.0);
	gl_FragColor = gl_Color;
}




















