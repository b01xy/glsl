// fragments
uniform sampler2D Tex0;
uniform sampler2D Tex1;

void main() {
	vec4 colorVideo = texture2D(Tex0, gl_TexCoord[0].st);
	vec4 colorVideoFeedBack = texture2D(Tex1, gl_TexCoord[0].st);
	colorVideo = colorVideo * 0.01 + colorVideoFeedBack * 0.99;
	gl_FragColor = colorVideo;
}
