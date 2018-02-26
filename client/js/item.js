
define(['entity'], function(Entity) {

    var Item = Entity.extend({
        init: function(id, kind, type) {
            this._super(id, kind);

            this.itemKind = Types.getKindAsString(kind);
            this.type = type;
            this.wasDropped = false;
        },

        hasShadow: function() {
            return true;
        },
        // UPDATE INGAME INVENTORY HERE
        onLoot: function(player) {
            console.log(this.itemKind);
            if(this.type === "weapon") {
                player.switchWeapon(this.itemKind);
                player.inventory.push(this.itemKind);
                let inventoryList = document.getElementById('inventory_list');
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(this.itemKind));
                inventoryList.appendChild(li);
            }
            else if(this.type === "armor") {
                player.armorloot_callback(this.itemKind);
                player.inventory.push(this.itemKind);
                let inventoryList = document.getElementById('inventory_list');
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(this.itemKind));
                inventoryList.appendChild(li);
            }
        },

        getSpriteName: function() {
            return "item-"+ this.itemKind;
        },

        getLootMessage: function() {
            return this.lootMessage;
        }
    });

    return Item;
});
