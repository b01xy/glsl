// fragments
uniform sampler2D Tex0;
uniform sampler2D Tex1;

void main() {
	vec4 colorVideo = texture2D(Tex0, gl_TexCoord[0].st);
	vec4 colorVideoFeedBack = texture2D(Tex1, gl_TexCoord[0].st);
// le colorVideoFeedBack récupère le feedback via le Tex1
	colorVideo = colorVideo - colorVideoFeedBack;
//	if (length(vec3(colorVideo)) > 0.05) colorVideo.a = 1.0;
	colorVideo.a = length(vec3(colorVideo) * 2.0);
	gl_FragColor = colorVideo;
}
