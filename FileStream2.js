module.exports = function () {
  let Files = java.nio.file.Files;
  let Paths = java.nio.file.Paths;
function FileStream (path, isJson) {
  if (this instanceof FileStream) {
    if (Files.isDirectory (Paths.get (path)))
      throw new Error ('"' + path + '" is not a File');
    this.path = Paths.get (path);
    directory = path.split (path.split ('/').pop ())[0];
    this.directory = Paths.get (directory);
    this.fileName = path.split ('/').pop ();
    if (isJson) {
      this.isJson = isJson;
    }
  } else
    return new FileStream (path, isJson);
}

if (!FileStream.prototype.read)
    Object.defineProperty (FileStream.prototype, 'read', {
    value () {
      let res = java.lang.String (Files.readAllBytes(this.path));
      res = this.isJson ? JSON.parse (res) : res;
      return res;
    }
    });
    
if (!FileStream.prototype.write)
    Object.defineProperty (FileStream.prototype, 'write', {
    value (v) {
      if (!Files.exists (this.path)) {
        Files.createDirectories (this.directory);
        Files.createFile (this.path);
      }
      return Files.write (this.path, new java.lang.String (v).getBytes ());
    }
    });
    
if (!FileStream.prototype.exists)
    Object.defineProperty (FileStream.prototype, 'exists', {
    value () {
      return Files.exists (this.path);
    }
    });
    
if (!FileStream.prototype.move)
    Object.defineProperty (FileStream.prototype, 'move', {
    value (path) {
      if (!java.io.File (Paths.get(path)).exists()) {
        java.io.File (path).mkdirs();
      }
      return Files.move (Paths.get (this.path), Paths.get (path + this.fileName));
    }
    });

if (!FileStream.prototype.remove)
    Object.defineProperty (FileStream.prototype, 'remove', {
    value () {
      return Files.deleteIfExists (Paths.get (this.path));
    }
    });
return {FileStream : FileStream};
}