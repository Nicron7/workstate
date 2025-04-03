import { promises as fs } from 'fs';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

(async () => {
    const files = await imagemin(['build/img/*.{jpg,png,svg}'], {
        destination: 'build/img/compressed',
        plugins: [
            imageminMozjpeg({ quality: 75 }),  
            imageminPngquant({ quality: [0.6, 0.8] }),  
            imageminSvgo(),
            imageminWebp({ quality: 80 })  
        ]
    });

    console.log('Imágenes comprimidas y convertidas a WebP');
})();