import { Global, Module } from '@nestjs/common';
import * as Minio from 'minio';

export const MINIO_CLIENT = 'MINIO_CLIENT';

@Global()
@Module({
    providers: [
        {
            provide: MINIO_CLIENT,
            async useFactory() {
                const client = new Minio.Client({
                        endPoint: 'localhost',
                        port: 9000,
                        useSSL: false,
                        accessKey: 'wlnNXW5wLlFNAVDIAKyO',
                        secretKey: 'cTyGjyrZQDbyh0f6kmK32snvxu9FiH6A8Td7WfkI'
                    })
                return client;
            }
          }
    ],
    exports: [MINIO_CLIENT]
})
export class MinioModule {}
