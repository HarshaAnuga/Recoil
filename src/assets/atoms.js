import{atom} from "recoil";

export const networkAtom=atom({
    key:"networkAtom",
    default:104
});

export const jobsAtom=atom({
    key:"jobsAtom",
    default:0
})

export const notificationAtom=atom({
    key:"NotificationAtom",
    default:0
})

export const messagingAtom=atom({
    key:"MessagingAtom",
    default:0
})