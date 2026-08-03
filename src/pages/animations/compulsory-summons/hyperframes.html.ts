import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

export function GET() {
  const sourcePath = path.join(
    process.cwd(),
    'public',
    'animations',
    'compulsory-summons',
    'hyperframes',
    'index.html',
  );

  return new Response(fs.readFileSync(sourcePath, 'utf8'), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
