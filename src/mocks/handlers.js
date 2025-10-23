import { rest } from 'msw'

export const handlers = [
  rest.get('/api/dashboard', (req,res,ctx) => {
    return res(ctx.json({ balance:1250.75 }))
  }),
  rest.get('/api/stores', (req,res,ctx) => {
    return res(ctx.json([ {id:1, name:'Awesome Shopify Store', platform:'Shopify', status:'Connected', autoSync:true, lastSync:'5 minutes ago', action:'Sync Now'}, {id:2, name:'Amazon FBM US', platform:'Amazon', status:'Connected', autoSync:true, lastSync:'1 hour ago', action:'Sync Now'}, {id:3, name:'WooCommerce US', platform:'WooCommerce', status:'Error', autoSync:false, lastSync:'2 days ago', action:'Reconnect'} ]))
  }),
  rest.get('/api/orders', (req,res,ctx)=>{
    return res(ctx.json([ {id:1, order:'#ORD-5124', date:'Sep 2, 2025', store:'Shopify Store', total:'$125.50', status:'Unfulfilled', statusBadgeBg:'#f8eddc', statusBadgeColor:'#b86c00', payment:'Paid', payBadgeBg:'#dff6ea', payBadgeColor:'#1f7a3a', tracking:'--'}, {id:2, order:'#ORD-5123', date:'Sep 1, 2025', store:'Amazon FBM US', total:'$88.00', status:'Fulfilled', statusBadgeBg:'#dff6ea', statusBadgeColor:'#1f7a3a', payment:'Paid', payBadgeBg:'#dff6ea', payBadgeColor:'#1f7a3a', tracking:'--'}, {id:3, order:'#ORD-5122', date:'Sep 1, 2025', store:'Shopify Store', total:'$210.00', status:'Processing', statusBadgeBg:'#e7efff', statusBadgeColor:'#2355a8', payment:'Paid', payBadgeBg:'#dff6ea', payBadgeColor:'#1f7a3a', tracking:'--'}, {id:4, order:'#ORD-5121', date:'Aug 31, 2025', store:'WooCommerce US', total:'$45.20', status:'Exception', statusBadgeBg:'#fff6d9', statusBadgeColor:'#a67a00', payment:'Unpaid', payBadgeBg:'#ffdcdc', payBadgeColor:'#bf2d2d', tracking:'--'} ]))
  }),
  rest.get('/api/products', (req,res,ctx)=>{
    return res(ctx.json([ {id:1, title:'Smart LED Desk Lamp', sku:'SLDL-001', store:'Shopify Store', mapStatus:'Mapped', mapBg:'#dff6ea'}, {id:2, title:'Wooden Desk Organizer', sku:'WDO-005', store:'Shopify Store', mapStatus:'Need Mapping', mapBg:'#fff7d9'} ]))
  }),
  rest.get('/api/sourcing', (req,res,ctx)=>{
    return res(ctx.json([ {id:1, req:'#SRC-845', product:'Smart LED Desk Lamp', date:'Sep 1, 2025', status:'Quoted', statusBg:'#fff7d9', price:'$9.10', action:'Review'}, {id:2, req:'#SRC-844', product:'Ergonomic Mousepad', date:'Aug 30, 2025', status:'Pending', statusBg:'#f8eddc', price:'--', action:'View'}, {id:3, req:'#SRC-842', product:'Wooden Desk Organizer', date:'Aug 28, 2025', status:'Accepted', statusBg:'#dff6ea', price:'$12.20', action:'View'} ]))
  }),
  rest.get('/api/invoices', (req,res,ctx)=>{
    return res(ctx.json([ {id:'#INV-1052', date:'Sep 1, 2025', type:'Order Fees', amount:'$250.50', status:'Paid', statusBg:'#dff6ea'}, {id:'#INV-1051', date:'Aug 25, 2025', type:'Recharge', amount:'$1000.00', status:'Paid', statusBg:'#dff6ea'}, {id:'#INV-1050', date:'Aug 1, 2025', type:'Order Fees', amount:'$215.25', status:'Paid', statusBg:'#dff6ea'} ]))
  }),
  rest.get('/api/cases', (req,res,ctx)=>{
    return res(ctx.json([ {id:1, caseId:'CS-205', order:'ORD-5120', type:'Logistics', priority:'Medium', status:'Awaiting Reply', lastUpdate:'2 hours ago'}, {id:2, caseId:'CS-204', order:'ORD-5115', type:'Product', priority:'High', status:'In Progress', lastUpdate:'Yesterday'} ]))
  })
];
