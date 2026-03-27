// 1. DATA GUDANG (Simpan semua info pulau di sini)
const daftarTrip = {
    'pari': {
        nama: 'Pulau Pari',
        badge: 'Best Seller',
        harga: '390.000',
        gambar: 'image/kartu2.jpg',
        // Fasilitas sesuai Screenshot 2026-03-21 230113.png
        fasilitas: [
            'Penyebrangan Kapal Ferry PP', 
            'Homestay AC (sharing)', 
            'Makan 3x', 
            'Kapal & Alat Snorkeling', 
            'Barbeque (BBQ)', 
            'Sepeda Santai', 
            'Guide di Pulau',
            'Dokumentasi Underwater',
        ],
        itinerary: {
            // Jadwal Hari 1 sesuai Screenshot 2026-03-21 230137.png
            day1: [
                { jam: '06.30', kegiatan: 'Kumpul di Pelabuhan Kaliadem - Muara Angke' },
                { jam: '07.30', kegiatan: 'Menuju Pulau Pari' },
                { jam: '09.00', kegiatan: 'Check-in penginapan di Pulau Pari' },
                { jam: '11.30', kegiatan: 'Makan siang & Isoma' },
                { jam: '13.00', kegiatan: 'Snorkeling & Jelajah Pulau Pari' },
                { jam: '15.30', kegiatan: 'Ke Bintang Rama' },
                { jam: '17.00', kegiatan: 'Sunset di Pantai Pasir Perawan' },
                { jam: '18.30', kegiatan: 'Makan malam' },
                { jam: '20.00', kegiatan: 'Santap BBQ' },
                { jam: '21.00', kegiatan: 'Acara Bebas dan Istirahat' }
            ],
            // Jadwal Hari 2 sesuai Screenshot 2026-03-21 230155.png
            day2: [
                { jam: '05.00', kegiatan: 'Sunrise di Bukit Matahari' },
                { jam: '07.00', kegiatan: 'Sarapan pagi' },
                { jam: '08.00', kegiatan: 'Ke Pantai Bintang' },
                { jam: '09.00', kegiatan: 'Check out homestay' },
                { jam: '10.00', kegiatan: 'Perjalanan kembali menuju Pelabuhan Kaliadem - Muara Angke' }
            ]
        }
    },
    'pari2': {
        nama: 'One Day Pulau Pari',
        badge: 'Favorite',
        harga: '200.000',
        gambar: 'image/pari2-2.jpg',
        // Fasilitas sesuai Screenshot 2026-03-21 230846.png
        fasilitas: [
            'Penyebrangan Kapal Tradisional PP',
            'Pelampung',
            'Tiket Masuk Pulau Pari',
            'Tiket Masuk Pantai Pasir Perawan',
            'Tour Leader',
            'Dokumentasi',
        ],
        itinerary: {
            // Jadwal sesuai Screenshot 2026-03-21 230905.png
            day1: [
                { jam: '06.30', kegiatan: 'Kumpul di Dermaga Muara Kamal, Penjaringan' },
                { jam: '10.30', kegiatan: 'Tiba di Pulau Pari' },
                { jam: '10.45', kegiatan: 'Explore Pulau Pari, Pantai Pasir Perawan' },
                { jam: '11.00', kegiatan: 'Snorkling (opsional)' },
                { jam: '13.00', kegiatan: 'Makan Siang' },
                { jam: '16.00', kegiatan: 'Perjalanan pulang kembali ke Muara Kamal' },
                { jam: '18.00', kegiatan: 'Perkiraan sampai di Jakarta dermaga Muara kamal dan trip selesai' }
            ],
            day2: [] // Kosong karena paket 1 hari
        }
    },
    'pulau-harapan': {
        nama: 'Pulau Harapan',
        badge: 'Best Seller',
        harga: '390.000',
        gambar: 'image/harapan2.jpg',
        fasilitas: [
            'Penyebrangan Kapal Ferry PP',
            'Homestay AC (sharing)',
            'Makan 3x',
            'kapal & Alat Snorkeling',
            'Kapal Jelajah Pulau',
            'Barbeque (BBQ)',
            'Guide di Pulau', 
            'Dokumentasi Underwater',
        ],
        itinerary: {
            day1: [
                { jam: '06.30', kegiatan: 'Kumpul di Pelabuhan Kaliadem - Muara Angke' },
                { jam: '08.00', kegiatan: 'Menuju Pulau Harapan' },
                { jam: '11.00', kegiatan: 'Tiba di Pulau Harapan' },
                { jam: '11.00', kegiatan: 'Check-in homestay' },
                { jam: '12.00', kegiatan: 'Makan siang di Pulau Harapan (kami siapkan di homestay)' },
                { jam: '12.30', kegiatan: 'Acara bebas. Bisa di isi dengan istirahat atau explore Pulau Harapan' },
                { jam: '13.00', kegiatan: 'Kegiatan snorkling' },
                { jam: '16.00', kegiatan: 'Menikmati sunset di Pulau Dolpin' },
                { jam: '17.00', kegiatan: 'Kembali ke Pulau Harapan' },
                { jam: '17.30', kegiatan: 'Bersih-bersih dan istirahat' },
                { jam: '18.00', kegiatan: 'Makan malam di Pulau Harapan (kami siapkan di homestay)' },
                { jam: '19.00', kegiatan: 'Acara bebas. Bisa di isi dengan menikmati suasana malam di Pulau Harapan' },
                { jam: '20.00', kegiatan: 'Barbeque Time' },
                { jam: '21.00', kegiatan: 'Acara Bebas dan istirahat' }
            ],
            day2: [
                { jam: '05.00', kegiatan: 'Hunting sunrise di dermaga Pulau Harapan' },
                { jam: '06.30', kegiatan: 'Sarapan (kami siapkan di homestay)' },
                { jam: '07.00', kegiatan: 'Jelajah Pulau (Option: Pulau Bira Besar, Pulau Bulat, Pulau Genteng)' },
                { jam: '09.00', kegiatan: 'Kembali ke homestay' },
                { jam: '10.00', kegiatan: 'Check-out dan menuju dermaga dan naik ke kapal' },
                { jam: '11.00', kegiatan: 'Perjalanan menuju Pelabuhan Kaliadem – Muara Angke dan trip selesai' }
            ]
        }
    },
    'pramuka': {
        nama: 'Pulau Pramuka',
        badge: 'Recommended',
        harga: '420.000',
        gambar: 'image/pramuka2.jpg', // Sesuaikan nama file gambar lo
      fasilitas: [
            'Penyebrangan Kapal Ferry PP',
            'Homestay AC (sharing)',
            'Makan 3x',
            'kapal & Alat Snorkeling',
            'Kapal Jelajah Pulau',
            'Barbeque (BBQ)',
            'Guide di Pulau', 
            'Dokumentasi Underwater',
        ],
        itinerary: {
            day1: [
                { jam: '06.30', kegiatan: 'Berkumpul di Pelabuhan Kali Adem - Muara Angke' },
                { jam: '08.00', kegiatan: 'Perjalanan ke Pulau Pramuka' },
                { jam: '11.00', kegiatan: 'Tiba, Check-in Homestay & Acara Bebas' },
                { jam: '12.00', kegiatan: 'Makan siang dan isoma' },
                { jam: '13.00', kegiatan: 'Snorkeling Soft Coral & Pulau Air' },
                { jam: '17.30', kegiatan: 'Kembali ke Pulau Pramuka' },
                { jam: '19.00', kegiatan: 'Makan Malam,  Barbeque dan acara bebas' }
            ],
            day2: [
                { jam: '05.30', kegiatan: 'Sunrise di Pulau Pramuka' },
                { jam: '06.30', kegiatan: 'Sarapan Pagi' },
                { jam: '07.30', kegiatan: 'Explore Taman Nasional & Penangkaran Penyu' },
                { jam: '10.00', kegiatan: 'Mandi, Packing & Persiapan Pulang' },
                { jam: '12.00', kegiatan: 'Perjalanan ke Pelabuhan Kali Adem - Muara Angke' }
            ]
        }
    },
    'tidung': {
        nama: 'Pulau Tidung',
        badge: 'Favorite',
        harga: '390.000',
        gambar: 'image/pulau-tidung-jembatan.jpg', // Pastikan filenya ada di folder image
        fasilitas: [
            'Penyebrangan Kapal Ferry PP', 
            'Homestay AC (sharing)', 
            'Makan 3x', 
            'Kapal & Alat Snorkeling',
            'Barbeque (BBQ)',
            'Sepeda Santai',
            'Guide di Pulau',
            'Dokumentasi Underwater',
        ],
        itinerary: {
            day1: [
                { jam: '06.30', kegiatan: 'Kumpul di Dermaga Kali Adem - Muara Angke' },
                { jam: '08.00', kegiatan: 'Berangkat ke Pulau Tidung' },
                { jam: '10.00', kegiatan: 'Tiba & check-in homestay' },
                { jam: '11.00', kegiatan: 'Makan siang' },
                { jam: '12.00', kegiatan: 'Foto di Jembatan Cinta & jumping' },
                { jam: '13.30', kegiatan: 'Snorkeling di spot terbaik' },
                { jam: '15.30', kegiatan: 'Sepedaan keliling pulau' },
                { jam: '17.00', kegiatan: 'Sunset di pantai' },
                { jam: '18.30', kegiatan: 'BBQ & makan malam' },
                { jam: '20.00', kegiatan: 'Free time' }
            ],
            day2: [
                { jam: '05.00', kegiatan: 'Sunrise di Jembatan Cinta' },
                { jam: '07.00', kegiatan: 'Sarapan' },
                { jam: '08.00', kegiatan: 'Explore Tidung Besar' },
                { jam: '10.00', kegiatan: 'Last photo session' },
                { jam: '11.00', kegiatan: 'Kembali ke Jakarta' },
                { jam: '13.00', kegiatan: 'Tiba di Dermaga Kali Adem - Muara Angke' }
            ]
        }
    },
    'kelor': {
        nama: 'Pulau Kelor, Onrust, Cipir',
        badge: 'SEDANG TUTUP',
        harga: '200.000', // Sesuaikan dengan harga di katalog lo jika berbeda
        gambar: 'image/kelor2.jpg',
        fasilitas: [
            'Kapal Tradisional Jelajah 3 Pulau PP', 
            'Makan Siang', 
            'Tiket Masuk Pulau',
            'Tour Leader',
            'Dokumentasi'
        ], // Sesuai screenshot fasilitas
        itinerary: {
            day1: [
                { jam: '07.00', kegiatan: 'Kumpul di Dermaga Kali Adem' },
                { jam: '08.00', kegiatan: 'Berangkat ke Pulau Kelor' },
                { jam: '09.00', kegiatan: 'Tiba di Pulau Kelor, Explore pulau kelor'},
                { jam: '10.30', kegiatan: 'Explore Pulau Onrust & benteng Belanda' },
                { jam: '12.00', kegiatan: 'Makan siang di dipulau onrust' },
                { jam: '13.00', kegiatan: 'Main air / Watersport (Banana atau donat) & foto-foto di Pulau Cipir' },
                { jam: '15.30', kegiatan: 'Persiapan pulang' },
                { jam: '16.00', kegiatan: 'Kembali ke Jakarta' },
                { jam: '17.00', kegiatan: 'Tiba di Dermaga Kali Adem' }
            ], // Data dari itinerary terbaru
            day2: [] // Kosong karena paket satu hari saja
        }
    },
};

let tripTerpilih = null;

// 2. FUNGSI BUKA MODAL
function openModal(id) {
    const data = daftarTrip[id];
    if (!data) return;

    tripTerpilih = data; // Simpan sementara data yg diklik

    // Isi konten dasar ke ID yang ada di HTML lo
    document.getElementById('modal-title').innerText = data.nama;
    document.getElementById('modal-badge').innerText = data.badge;
    document.getElementById('modal-img').src = data.gambar;
    
    // Jika ada elemen harga di modal, isi juga
    const priceElem = document.getElementById('modal-price');
    if(priceElem) priceElem.innerText = data.harga;

    // Isi Fasilitas (Looping biar rapi)
    const listFasilitas = document.getElementById('modal-facilities');
    listFasilitas.innerHTML = '';
    data.fasilitas.forEach(f => {
        listFasilitas.innerHTML += `<li class="flex items-center gap-2"><span>✅</span> ${f}</li>`;
    });

    // Default tampilin Itinerary Day 1
    switchDay(1);

    // Munculkan Modal (Hapus class hidden)
    const modal = document.getElementById('modal-detail');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Kunci scroll body biar ga balapan
    document.body.style.overflow = 'hidden';
}

// 3. FUNGSI GANTI HARI (ITINERARY)
function switchDay(hari) {
    if (!tripTerpilih) return;
    
    const container = document.getElementById('modal-itinerary');
    const jadwal = hari === 1 ? tripTerpilih.itinerary.day1 : tripTerpilih.itinerary.day2;
    
    // Update Style Tombol (Biar ketauan mana yg aktif)
    const btn1 = document.getElementById('btn-day1');
    const btn2 = document.getElementById('btn-day2');
    
    if(hari === 1) {
        btn1.classList.add('bg-orange-500', 'text-white');
        btn2.classList.remove('bg-orange-500', 'text-white');
    } else {
        btn2.classList.add('bg-orange-500', 'text-white');
        btn1.classList.remove('bg-orange-500', 'text-white');
    }

    // Render Jadwal
    container.innerHTML = '';
    jadwal.forEach(item => {
        container.innerHTML += `
            <div class="relative pl-2">
                <div class="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-4 border-orange-500"></div>
                <p class="text-[10px] font-black text-orange-500 uppercase mb-0.5">${item.jam} WIB</p>
                <p class="text-slate-700 text-sm font-bold leading-tight">${item.kegiatan}</p>
            </div>
        `;
    });

    container.innerHTML += `
        <div class="mt-6 p-4 rounded-2xl bg-orange-50 border border-dashed border-orange-200">
            <p class="text-[10px] md:text-xs font-black text-orange-700 uppercase tracking-widest text-center">NB: OPEN TRIP adalah Trip Gabungan dengan peserta lain.</p>
            <p class="text-[10px] md:text-xs font-medium text-orange-600 mt-2 italic text-center leading-relaxed">Itinerary yang tertulis dapat berubah sewaktu-waktu serta menyesuaikan situasi dan kondisi di lapangan.</p>
        </div>
    `;
}

// 4. FUNGSI TUTUP MODAL
function closeModal() {
    const modal = document.getElementById('modal-detail');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; // Aktifkan scroll lagi
}

// Tambahan: Nutup modal kalau klik area luar (background hitam)
window.onclick = function(event) {
    const modal = document.getElementById('modal-detail');
    if (event.target == modal) {
        closeModal();
    }
}


//POP UP JADWAL 
// --- FUNGSI KHUSUS MODAL JADWAL ---

function openJadwal() {
    const modalJadwal = document.getElementById('modal-jadwal');
    const contentJadwal = document.getElementById('modal-content');
    
    modalJadwal.classList.remove('hidden');
    modalJadwal.classList.add('flex');
    
    // Animasi sedikit biar smooth
    setTimeout(() => {
        contentJadwal.classList.remove('scale-95');
        contentJadwal.classList.add('scale-100');
    }, 10);

    document.body.style.overflow = 'hidden'; // Kunci scroll background
}

function closeJadwal() {
    const modalJadwal = document.getElementById('modal-jadwal');
    const contentJadwal = document.getElementById('modal-content');
    
    contentJadwal.classList.remove('scale-100');
    contentJadwal.classList.add('scale-95');
    
    setTimeout(() => {
        modalJadwal.classList.add('hidden');
        modalJadwal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Aktifkan scroll lagi
    }, 200);
}

// Tutup modal jadwal kalau user klik di area hitam/blur
document.getElementById('modal-jadwal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeJadwal();
    }
});

// whatsapp.js - Khusus buat ngurusin kirim pesan ke WA

function updateWALinkWithDate(event) {
    // 1. Ambil elemen-elemen yang dibutuhin
    const titleElem = document.getElementById('modal-title');
    const dateElem = document.getElementById('booking-date');
    const priceElem = document.getElementById('modal-price');

    // 2. Ambil value-nya (dengan fallback kalau data kosong)
    const tripName = titleElem ? titleElem.innerText : "Trip";
    const bookingDate = dateElem ? dateElem.value : "";
    const tripPrice = priceElem ? priceElem.innerText : "Cek Harga";
    
    // --- KONFIGURASI ADMIN ---
    const phone = "628568673041"; 
    // -------------------------

    // 3. Validasi: Jika tanggal kosong, stop di sini.
    if (!bookingDate) {
        alert("Waduh, tanggalnya belum dipilih nih! Pilih dulu ya biar Admin bisa cek slot. 😊");
        if (event) event.preventDefault(); 
        return false;
    }

    // 4. Rakit pesan otomatis (Format rapi pakai Bold di WA)
    const message = `Halo Admin Trip Seribu! 👋%0A%0ASaya mau tanya ketersediaan slot untuk:%0A📍 *Paket:* ${tripName}%0A📅 *Rencana Tanggal:* ${bookingDate}%0A💰 *Harga:* Rp ${tripPrice}%0A%0AApakah masih tersedia? Terima kasih!`;

    // 5. EKSEKUSI: Buka WhatsApp langsung di tab baru
    const waURL = `https://wa.me/${phone}?text=${message}`;
    window.open(waURL, '_blank');

    // Optional: Mencegah link standar berjalan kalau lo pakai tag <a>
    if (event) event.preventDefault();
}

/* ==========================================
   LOGIKA SLIDER OTOMATIS (SILINDER FOTO)
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');

    // Cuma butuh slider-container, gak butuh tombol lagi!
    if (slider) {
        const slideNext = () => {
            const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1;
            
            if (isAtEnd) {
                // Kalau udah foto terakhir, balik ke foto pertama
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Geser ke foto selanjutnya
                slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
            }
        };

        // Langsung hajar otomatis tiap 3.5 detik
        setInterval(slideNext, 3500);
    }
});

/* ==========================================
   LOGIKA BACK TO TOP (MUNCUL PAS DI-SCROLL)
   ========================================== */
window.addEventListener('scroll', () => {
    const btnTop = document.getElementById('backToTop');
    if (btnTop) {
        // Tombol muncul kalau layar di-scroll lebih dari 400px
        if (window.scrollY > 400) {
            btnTop.classList.remove('opacity-0', 'invisible');
            btnTop.classList.add('opacity-100', 'visible');
        } else {
            btnTop.classList.add('opacity-0', 'invisible');
            btnTop.classList.remove('opacity-100', 'visible');
        }
    }
});

// Logika Klik buat balik ke atas
document.addEventListener('DOMContentLoaded', () => {
    const btnTop = document.getElementById('backToTop');
    if (btnTop) {
        btnTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Biar geser ke atasnya halus, gak loncat
            });
        });
    }
});