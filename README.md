# Nusantara Quiz Studio — 16 Mata Pelajaran (Supabase Cloud + Soft Apple UI)

Platform latihan kuis interaktif bergaya **Apple Cupertino (Soft Pastel & Frosted Glass)** yang memiliki **16 Section Mata Pelajaran** tersendiri dan terhubung langsung ke basis data **Supabase Postgres**.

## 16 Section Mata Pelajaran
1. **Bahasa Indonesia** (`bahasa-indonesia`)
2. **PJOK** (`pjok`)
3. **Bahasa Inggris** (`bahasa-inggris`)
4. **Sejarah** (`sejarah`)
5. **Matematika** (`matematika`)
6. **Mandarin** (`mandarin`)
7. **Seni Budaya** (`seni-budaya`)
8. **Biologi** (`biologi`)
9. **Agama Katolik** (`agama-katolik`)
10. **Fisika** (`fisika`)
11. **Informatika** (`informatika`)
12. **Geografi** (`geografi`)
13. **Pancasila** (`pancasila`)
14. **Kimia** (`kimia`)
15. **Sosiologi** (`sosiologi`)
16. **Ekonomi** (`ekonomi`)

## Arsitektur Database Supabase (`bgqhdqmgdvdiebxlpyhc`)
- **`public.subjects`**: Menyimpan daftar 16 mata pelajaran, kategori, deskripsi, ikon, warna aksen, dan urutan tampilan.
- **`public.questions`**: Menyimpan bank soal lintas 16 mata pelajaran dengan dukungan **Tipe A–F** (*Pilihan Ganda, Benar/Salah, Isian Singkat, Analisis Pengecoh, Konsep & Istilah, Studi Kasus HOTS*) dan **Tingkat Kesulitan 1–3** (*Mudah, Sedang, Sulit/HOTS*).
- **`public.quiz_attempts`**: Menyimpan riwayat pengerjaan kuis dan skor siswa per mata pelajaran secara real-time.
- Lihat skema SQL lengkap di [`supabase_schema.sql`](./supabase_schema.sql).
