import mongoose, { Document, Model } from 'mongoose';

// Tipe data untuk dokumen dalam MongoDB menggunakan Mongoose
interface ExampleDocument extends Document {
    name: string;
    age: number;
}

// Fungsi untuk mengambil data dari MongoDB
async function getData(): Promise<ExampleDocument[]> {
    try {
        // Mendapatkan model dari koleksi MongoDB menggunakan Mongoose
        const ExampleModel: Model<ExampleDocument> = mongoose.model<ExampleDocument>('Example');

        // Mengambil data dari MongoDB
        const data: ExampleDocument[] = await ExampleModel.find();

        return data;
    } catch (error) {
        throw new Error('Gagal mengambil data dari database.');
    }
}