#!/bin/bash

# Nama file CSV yang akan dibuat
output_csv="daftar_path.csv"

# Function untuk mengganti karakter '_' menjadi spasi pada nama direktori
function replace_underscore_with_space() {
  local dir_name="$1"
  echo "${dir_name//_/ }"
}

# Function untuk menulis path dari setiap file gambar ke dalam CSV
function write_image_paths_to_csv() {
  local dir="$1"
  local csv_file="$2"
  local directory_name="$(basename "$dir")"
  local formatted_dir_name=$(replace_underscore_with_space "$directory_name")

  # Menggunakan perintah find untuk mencari semua file gambar dalam direktori saat ini
  find "$dir" -type f \( -iname \*.jpg -o -iname \*.jpeg -o -iname \*.png -o -iname \*.gif \) | while IFS= read -r file_path; do
    echo "$formatted_dir_name,$file_path" >> "$csv_file"
  done
}

# Menghapus file CSV jika sudah ada sebelumnya
if [ -f "$output_csv" ]; then
  rm "$output_csv"
fi

# Loop melalui setiap direktori di dalam direktori utama
for directory in images/photos/*; do
  if [ -d "$directory" ]; then
    # Memanggil function untuk menulis path dari setiap file gambar dalam direktori saat ini ke dalam CSV
    write_image_paths_to_csv "$directory" "$output_csv"
  fi
done

echo "File CSV dengan daftar path telah berhasil dibuat: $output_csv"
