// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000001000000010101010001000100000001010000000000000101010001000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000101010100010101000000000000000000000001010100000001010100000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000001010101010000010101010000000000000000000101010100000101000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. . 2 2 2 2 . 2 . 2 . . . 2 2 . 
. . . . . 2 2 2 . 2 . 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 . . . . . . 
. 2 2 2 2 . 2 2 2 . . . . . . . 
. . . . 2 2 2 . . . 2 2 2 . . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . 2 2 2 2 . . . . . 
. . . . 2 2 2 2 . . 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
