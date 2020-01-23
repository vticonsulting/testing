
### Tuesday, October 29, 2019 – 09:15 AM

- Users are getting a payment unsuccessful email, when the payments seem to going through
- The Email is using the incorrect program event name
- Duplicated Pledges?
- CC transaction in Braintree (BT)
- But, transaction NOT in Locker
- pledge_update_to_paid_query.rtf
- getting a significant number of help requests from people frustrated they can't re-submit their payment -- aka would have needed to refund them if we didn't run that update
- Anthony found issue, May also be affecting prizes
- Miquel created report to for "users impacted" -- not indexed, will run slowly
- 
- 

### Friday, October 25, 2019 – 10:52 AM

- The Merchant Deposit Report (MDR) for a Fall 2019 program incorrectly included deposits from teh schools's Spring 2019 program
- Effect: Caused the PD to over invoice the school $6,620
- Severity: Huge, sending the school a refund check ASAP (program_id: 16722)
- Cause: Date range selected was incorrect

### Monday, October 21, 2019 – 02:58 PM

- The merchant deposit report appears to be broken 
  - Getting stuck on https://funrun.boosterthon.com/admin/programs/get-s3-report/19578/53929
  - Cause: New more secure s3 security settings
  - Support: Received calls from a few team members
  - Fix: 02:59 PM

