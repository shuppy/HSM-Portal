//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HsmBI
{
    using System;
    using System.Collections.Generic;
    
    public partial class NextOfKins
    {
        public int MemberId { get; set; }
        public string LastName { get; set; }
        public string OtherNames { get; set; }
        public string Gender { get; set; }
        public string MobileNo { get; set; }
        public string EmailAddress { get; set; }
        public string Relationship { get; set; }
        public string HomeAddress { get; set; }
        public string OfficeAddress { get; set; }
    
        public virtual Members Members { get; set; }
    }
}
