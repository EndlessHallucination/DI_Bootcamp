import fs from 'fs/promises';

export async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

export async function writeFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content);
        console.log('File written successfully!');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}