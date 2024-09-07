{ pkgs }: {
deps = [
  pkgs.unzip.out
  pkgs.docker-client
pkgs.nodejs-20_x
pkgs.libuuid
];
env = {
LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
};
}
