import { createClient } from '@supabase/supabase-js';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const bucket = 'components';

const supabase = createClient(supabaseUrl, supabaseKey);

async function download(fileName: string) {
  const { data, error } = await supabase
    .storage
    .from(bucket)
    .download(fileName);

  if (error) throw error;

  const buffer = await data.arrayBuffer();

  // Crear la carpeta destino si no existe
  const destPath = `src/${fileName}`;
  await mkdir(dirname(destPath), { recursive: true });

  await writeFile(destPath, Buffer.from(buffer));
}

const files = [
  
  'Carousel/Carrusel.tsx',
  
  
  
];

(async () => {
  await Promise.all(files.map(download));
})();