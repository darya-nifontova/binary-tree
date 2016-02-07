'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
        if (this.root == null) 
            {this.root = new Node(data)
            }
        else {
            var current = this.root;
            var F = false;

            while (!F) {
                if (data < current.data) {
                    if (current.left == null) {      
                        current.left = new Node(data);
                        F = true;
                    } else current = current.left;
                } 
                else {
                    if (current.right == null) {
                        current.right = new Node(data);
                        F = true;
                    } else current = current.right;   
                }
            }
        }
    }

	contains(data) {
        var F = false;
        if (this.root == null) return F;
        else {
            var current = this.root;

            while (!F) {
                if (data == current.data) {
                    return !F;
                    F = true;
                } 
                else {
                    if (data < current.data) {
                        if (current.left == null) {
                            return F;
                            F = true;
                        }
                        else current = current.left;
                    }
                    else {
                        if (current.right == null) {
                            return F;
                            F = true;
                        }
                        else current = current.right;
                    }
                }
            }
        }
    }

	remove(data) {
        var pointer = this.root;
        var parent = null;

        if (this.contains(data)) {
            while (pointer.data != data){
                parent = pointer;
                if (data < pointer.data) pointer = pointer.left;
                else pointer = pointer.right;
            }
         
            if (pointer.right == null && pointer.left == null) {
                if(parent == null) this.root = null;
                else {
                    if(parent.left == pointer) parent.left = null;
                    else parent.right = null;
                }
            }

            if(pointer.left != null && pointer.right == null) {
                parent.left = pointer.left;  
            }

            if(pointer.left == null && pointer.right != null) {
                parent.right = pointer.right;
            }

            if (pointer.left != null && pointer.right != null) {
                if(parent.left == pointer) {
                    parent.left = pointer.left;
                }   else parent.right = pointer.left; 
            }
        }
    }

	size() {
        var count =0;
        function size(node) {
            if (node !== null) {
                if (node.left !== null) {
                    size(node.left);
                }
                if (node.right !== null) {
                    size(node.right);
                }
                count++;
            }
        }
        size(this.root);
        return count;
    }

	isEmpty() {
        return this.root == null;
    }
}
