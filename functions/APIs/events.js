const { db } = require('../util/admin');

exports.getAllEvents = (request, response) => {
	db
        .collection('events')
        .where('netid', '==', request.user.netid)
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let events = [];
			data.forEach((doc) => {
				events.push({
                    eventId: doc.id,
                    title: doc.data().title,
                    netid: doc.data().netid,
					body: doc.data().body,
					createdAt: doc.data().createdAt,
				});
			});
			return response.json(events);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.getOneEvent = (request, response) => {
	db
        .doc(`/events/${request.params.eventId}`)
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json(
                    { 
                        error: 'Event not found' 
                    });
            }
            if(doc.data().netid !== request.user.netid){
                return response.status(403).json({error:"Unauthorized"})
            }
			EventData = doc.data();
			EventData.eventId = doc.id;
			return response.json(EventData);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: error.code });
		});
};

exports.postOneEvent = (request, response) => {
	if (request.body.body.trim() === '') {
		return response.status(400).json({ body: 'Must not be empty' });
    }
    
    if(request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    }
    
    const newEventItem = {
        title: request.body.title,
        netid: request.user.netid,
        body: request.body.body,
        createdAt: new Date().toISOString()
    }

    db
        .collection('events')
        .add(newEventItem)
        .then((doc)=>{
            const responseEventItem = newEventItem;
            responseEventItem.id = doc.id;
            return response.json(responseEventItem);
        })
        .catch((error) => {
            console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};

exports.deleteEvent = (request, response) => {
    const document = db.doc(`/events/${request.params.eventId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ 
                    error: 'Event not found' 
            })}
            if(doc.data().netid !== request.user.netid){
                return response.status(403).json({error:"Unauthorized"})
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ 
                error: err.code 
            });
        });
};

exports.editEvent = ( request, response ) => { 
    if(request.body.eventId || request.body.createdAt){
        response.status(403).json({message: 'Not allowed to edit'});
    }
    let document = db.collection('events').doc(`${request.params.eventId}`);
    document.update(request.body)
    .then((doc)=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((error) => {
        if(error.code === 5){
            response.status(404).json({message: 'Not Found'});
        }
        console.error(error);
        return response.status(500).json({ 
                error: error.code 
        });
    });
};