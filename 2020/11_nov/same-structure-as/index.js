Array.prototype.sameStructureAs = function (other) {
    // If the arrays lengths aren't equal, then their structures aren't the same
    if (this.length !== other.length) return false;
  
    for (let i = 0; i < this.length; i++) {
      // Find a subarray
      if (isArray(this[i]) || isArray(other[i])) {
        // Make sure both are subarrays; otherwise the structures aren't the same
        if (!isArray(this[i] || !isArray(other[i]))) return false;
        
        // Use recursion to check to see if the structures of the subarrays are the same
        const isSubarrayValid = this[i].sameStructureAs(other[i]);
        if (!isSubarrayValid) return false;
      }
    }
    // All tests have passed and the (sub)arrays searched have the same structure
    return true;
};
