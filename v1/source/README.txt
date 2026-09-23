Nano - Corresponding Source for GPL-3.0 components
==================================================

The Nano web app (https://nano-biba.vercel.app/app/) ships speech components
that contain eSpeak NG, licensed under the GNU General Public License v3.0.
As required by GPL-3.0 section 6, the complete corresponding source is
provided here free of charge, for at least three years from each release.

Archives (repository @ commit):
- rhasspy_espeak-ng-8593723f10cf.tar.gz          eSpeak NG (rhasspy fork), GPL-3.0
- wide-video_piper-phonemize-cfff8e52ebae.tar.gz piper-phonemize (links eSpeak NG)
- diffusion-studio_piper-wasm-022edba0455e.tar.gz piper-wasm: WASM build of the above,
                                                  build steps in its README.md
- xenova_phonemizer.js-6835144b7ee9.tar.gz       phonemizer.js: eSpeak NG WASM used by
                                                  the English voice

Build: the WASM binaries were produced with Emscripten 3.1.47 following the
steps in piper-wasm/README.md (espeak-ng ./autogen.sh && ./configure && make,
then piper-phonemize compiled against it).

License text: COPYING-GPL-3.0.txt
Contact: seyhancanyakan64@gmail.com
