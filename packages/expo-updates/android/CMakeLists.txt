cmake_minimum_required(VERSION 3.4.1)

project(expo-updates)

set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 20)
set(PACKAGE_NAME "expo-updates")
set(BUILD_DIR ${CMAKE_SOURCE_DIR}/build)

set(SRC_DIR "${CMAKE_SOURCE_DIR}/src/main/cpp")

file(GLOB SOURCES "${SRC_DIR}/*.cpp")
add_library(
  ${PACKAGE_NAME}
  SHARED
  ${SOURCES}
  "${BSDIFF_SRC_DIR}/bspatch.c"
  "${BSDIFF_SRC_DIR}/bzlib.c"
  "${BSDIFF_SRC_DIR}/blocksort.c"
  "${BSDIFF_SRC_DIR}/compress.c"
  "${BSDIFF_SRC_DIR}/crctable.c"
  "${BSDIFF_SRC_DIR}/decompress.c"
  "${BSDIFF_SRC_DIR}/huffman.c"
  "${BSDIFF_SRC_DIR}/randtable.c"
)

target_include_directories(
  ${PACKAGE_NAME}
  PRIVATE
  ${SRC_DIR}
  "${BSDIFF_SRC_DIR}"
)

find_library(LOG_LIB log)
find_package(fbjni REQUIRED CONFIG)

target_link_libraries(
  ${PACKAGE_NAME}
  ${LOG_LIB}
  fbjni::fbjni
  android
)