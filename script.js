document.getElementById('convertBtn').addEventListener('click', function() {
    const megabits = parseFloat(document.getElementById('megabits').value);
    if (isNaN(megabits)) {
        document.getElementById('result').textContent = 'Silakan masukkan angka yang valid.';
    } else {
        const megabytes = megabits / 8; // Konversi Megabit ke Megabyte
        document.getElementById('result').textContent = `${megabits} Megabit/s = ${megabytes.toFixed(2)} Megabyte/s`;
    }
});